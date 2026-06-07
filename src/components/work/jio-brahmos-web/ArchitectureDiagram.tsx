"use client"
/**
 * Brahmos System Architecture — ReactFlow Diagram
 *
 * To run standalone:
 *   npm install @xyflow/react
 *   Then mount <SystemArchitecture /> in any route or a dedicated page.
 *
 * Controls: scroll to zoom, drag to pan, drag nodes to reposition.
 */

import { JSX, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type Connection,
  BackgroundVariant,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// ─── Colour palette ───────────────────────────────────────────────────────────
const C = {
  native:   { bg: "#1e3a5f", border: "#3b82f6", text: "#fff" },
  entry:    { bg: "#1e4040", border: "#10b981", text: "#fff" },
  provider: { bg: "#3b2060", border: "#a855f7", text: "#fff" },
  router:   { bg: "#1a3a1a", border: "#22c55e", text: "#fff" },
  guard:    { bg: "#4a2000", border: "#f97316", text: "#fff" },
  feature:  { bg: "#1e2d4a", border: "#60a5fa", text: "#fff" },
  hook:     { bg: "#2d1f40", border: "#c084fc", text: "#fff" },
  api:      { bg: "#1a2e1a", border: "#4ade80", text: "#fff" },
  http:     { bg: "#2d2010", border: "#fbbf24", text: "#fff" },
  store:    { bg: "#1f1f40", border: "#818cf8", text: "#fff" },
  ui:       { bg: "#2d1a1a", border: "#f87171", text: "#fff" },
  shared:   { bg: "#1a2d2d", border: "#2dd4bf", text: "#fff" },
  backend:  { bg: "#1a1a1a", border: "#9ca3af", text: "#fff" },
};

function style(c: (typeof C)[keyof typeof C], width = 220) {
  return {
    background: c.bg,
    border: `1.5px solid ${c.border}`,
    borderRadius: 8,
    color: c.text,
    padding: "10px 14px",
    fontSize: 12,
    fontFamily: "monospace",
    width,
    whiteSpace: "pre-line" as const,
    lineHeight: 1.6,
  };
}

const arrow = {
  markerEnd: { type: MarkerType.ArrowClosed, color: "#6b7280" },
  style: { stroke: "#6b7280", strokeWidth: 1.5 },
};

// ─── Nodes ────────────────────────────────────────────────────────────────────
const initialNodes: Node[] = [
  // ── Row 0 — Native Shell ──────────────────────────────────────────────────
  {
    id: "native",
    position: { x: 480, y: 0 },
    data: { label: "🏠  Native Shell\n(Jio App Webview)\npasses ?key=<signed-token>" },
    style: style(C.native, 260),
  },

  // ── Row 1 — App Entry ─────────────────────────────────────────────────────
  {
    id: "main",
    position: { x: 480, y: 110 },
    data: { label: "main.tsx\ninitFont()  →  <AppProvider />" },
    style: style(C.entry, 260),
  },

  // ── Row 2 — Providers ─────────────────────────────────────────────────────
  {
    id: "app-provider",
    position: { x: 280, y: 210 },
    data: { label: "AppProvider\nQueryClientProvider\nTooltipProvider" },
    style: style(C.provider),
  },
  {
    id: "api-recovery-overlay",
    position: { x: 660, y: 210 },
    data: { label: "ApiRecoveryOverlay\nGlobal error UI\n+ retry queue" },
    style: style(C.provider),
  },

  // ── Row 3 — App.tsx ───────────────────────────────────────────────────────
  {
    id: "app",
    position: { x: 480, y: 330 },
    data: { label: "App.tsx\ntoken + _hasHydrated check\n→ public OR private routes" },
    style: style(C.router, 260),
  },

  // ── Row 4 — Route Branches ────────────────────────────────────────────────
  {
    id: "public-routes",
    position: { x: 80, y: 460 },
    data: {
      label:
        "Public Routes\n" +
        "/ → KeyValidator\n" +
        "/unauthorized\n" +
        "/session-expired\n" +
        "/not-found",
    },
    style: style(C.router, 200),
  },
  {
    id: "app-shell",
    position: { x: 480, y: 460 },
    data: { label: "AppShell\nLangContext + Outlet\nToaster + Suspense" },
    style: style(C.router, 220),
  },
  {
    id: "private-routes",
    position: { x: 870, y: 460 },
    data: { label: "Private Routes\n31 loan-flow stages\n(confirm-mobile → loan-approved)" },
    style: style(C.router, 220),
  },

  // ── Row 5 — Guards ────────────────────────────────────────────────────────
  {
    id: "key-validator",
    position: { x: 80, y: 620 },
    data: { label: "KeyValidator\nvalidateKey API →\nstores token in loanStore" },
    style: style(C.guard, 200),
  },
  {
    id: "step-guard",
    position: { x: 870, y: 620 },
    data: {
      label:
        "StepGuard\ncurrentStage check\nblocked-entry redirect\nInvalidStepRedirect",
    },
    style: style(C.guard, 220),
  },

  // ── Row 6 — Feature Pages ─────────────────────────────────────────────────
  {
    id: "feature-pages",
    position: { x: 600, y: 760 },
    data: {
      label:
        "Feature Pages  (src/features/loan/)\n" +
        "confirm-mobile · otp-verification\n" +
        "personal-details · loan-amount\n" +
        "work-details · bank-statement\n" +
        "loan-offer · residential-address\n" +
        "office-address · verify-ckyc\n" +
        "identity-verification · documents-required\n" +
        "upload-required-document · final-loan-offer\n" +
        "emi-setup · nach-mandate-setup\n" +
        "loan-agreement · loan-approved  (+more)",
    },
    style: style(C.feature, 300),
  },

  // ── Row 6b — Layout / Shared UI used by pages ─────────────────────────────
  {
    id: "layout",
    position: { x: 140, y: 760 },
    data: {
      label:
        "Layout.tsx\nActionHeader\nTitleHeader\nStepBar (progress %)",
    },
    style: style(C.shared, 200),
  },

  // ── Row 7 — Hooks ─────────────────────────────────────────────────────────
  {
    id: "shared-hooks",
    position: { x: 140, y: 980 },
    data: {
      label:
        "Shared Hooks\nuseLoanNavigation\nuseStepNavigation\nuseStageRedirect\nuseJourneyData\nuseOtpVerification\nusePoll · useTimer\nuseRecoverableMutation\nuseFingerprint",
    },
    style: style(C.hook, 210),
  },
  {
    id: "feature-hooks",
    position: { x: 660, y: 980 },
    data: {
      label:
        "Feature Hooks\n(per stage)\nuseUploadSubmit\nuseDigioMandate\nuseBankStatementPolling\n…",
    },
    style: style(C.hook, 210),
  },

  // ── Row 8 — API / Services ────────────────────────────────────────────────
  {
    id: "feature-api",
    position: { x: 660, y: 1160 },
    data: {
      label:
        "Feature APIs\n(TanStack Query v5)\nuseMutation / useQuery\nper-stage .api.ts files",
    },
    style: style(C.api, 210),
  },
  {
    id: "shared-services",
    position: { x: 380, y: 1160 },
    data: {
      label:
        "Shared Services\njourney-state.api\nmasterData.api\nemailVerify.api\notp verify/resend",
    },
    style: style(C.api, 210),
  },

  // ── Row 9 — HTTP + Stores ─────────────────────────────────────────────────
  {
    id: "api-client",
    position: { x: 480, y: 1340 },
    data: {
      label:
        "apiClient  (Axios)\nBearer token injection\nAuto token-refresh on 401\nrequiresAuth config",
    },
    style: style(C.http, 260),
  },
  {
    id: "loan-store",
    position: { x: 80, y: 1340 },
    data: {
      label:
        "loanStore  (Zustand)\ntoken · refreshToken\njourney · allJourneyData\nnachMandate · email\npersisted → localStorage",
    },
    style: style(C.store, 210),
  },
  {
    id: "stage-store",
    position: { x: 900, y: 1340 },
    data: {
      label:
        "stageStore  (Zustand)\ncurrentStageId\ncompletedStages[]\nmaxVisitedScreen\nisNavigating",
    },
    style: style(C.store, 210),
  },

  // ── Row 10 — UI Lib + Config ──────────────────────────────────────────────
  {
    id: "ui-lib",
    position: { x: 860, y: 1520 },
    data: {
      label:
        "UI Library\nshadcn/ui · Radix UI\nLucide icons\nTailwind CSS v4",
    },
    style: style(C.ui, 210),
  },
  {
    id: "lib-config",
    position: { x: 140, y: 1520 },
    data: {
      label:
        "lib / Config\napiConfig (endpoints)\nstageConfig (flow order)\ntoken utils · step.utils\napiRecovery · i18n",
    },
    style: style(C.entry, 220),
  },

  // ── Row 11 — Backend ──────────────────────────────────────────────────────
  {
    id: "backend",
    position: { x: 430, y: 1660 },
    data: {
      label:
        "☁️  Jio Financial Services API\n/jio/validate-key · /jio/refresh-token\n/loan-offer · /emi-setup · /kyc-verification\n/bank-statement · /loan-agreement\n/identity-verification · /documents\n…25+ domain endpoints",
    },
    style: style(C.backend, 360),
  },
];

// ─── Edges ────────────────────────────────────────────────────────────────────
const initialEdges: Edge[] = [
  // Entry chain
  { id: "e-native-main",       source: "native",              target: "main",                 ...arrow },
  { id: "e-main-provider",     source: "main",                target: "app-provider",         ...arrow },
  { id: "e-main-recovery",     source: "main",                target: "api-recovery-overlay", ...arrow },
  { id: "e-provider-app",      source: "app-provider",        target: "app",                  ...arrow },
  { id: "e-recovery-app",      source: "api-recovery-overlay",target: "app",                  ...arrow },

  // Router split
  { id: "e-app-public",        source: "app",                 target: "public-routes",        ...arrow },
  { id: "e-app-shell",         source: "app",                 target: "app-shell",            ...arrow },
  { id: "e-app-private",       source: "app",                 target: "private-routes",       ...arrow },

  // Shell feeds both branches
  { id: "e-shell-public",      source: "app-shell",           target: "public-routes",        ...arrow, style: { ...arrow.style, strokeDasharray: "4 3" } },
  { id: "e-shell-private",     source: "app-shell",           target: "private-routes",       ...arrow, style: { ...arrow.style, strokeDasharray: "4 3" } },

  // Public → KeyValidator
  { id: "e-pub-kv",            source: "public-routes",       target: "key-validator",        ...arrow },

  // Private → StepGuard → Feature
  { id: "e-priv-guard",        source: "private-routes",      target: "step-guard",           ...arrow },
  { id: "e-guard-feature",     source: "step-guard",          target: "feature-pages",        ...arrow },

  // Layout used by Feature
  { id: "e-layout-feature",    source: "layout",              target: "feature-pages",        ...arrow, style: { ...arrow.style, strokeDasharray: "4 3" } },

  // KeyValidator writes loanStore → unlocks privateRoutes
  { id: "e-kv-loanstore",      source: "key-validator",       target: "loan-store",           ...arrow, style: { ...arrow.style, stroke: "#818cf8" } },

  // Feature pages use hooks
  { id: "e-feature-shooks",    source: "feature-pages",       target: "shared-hooks",         ...arrow },
  { id: "e-feature-fhooks",    source: "feature-pages",       target: "feature-hooks",        ...arrow },

  // Hooks → APIs
  { id: "e-fhooks-fapi",       source: "feature-hooks",       target: "feature-api",          ...arrow },
  { id: "e-shooks-svc",        source: "shared-hooks",        target: "shared-services",      ...arrow },
  { id: "e-feature-fapi",      source: "feature-pages",       target: "feature-api",          ...arrow, style: { ...arrow.style, strokeDasharray: "4 3" } },

  // APIs → apiClient
  { id: "e-fapi-client",       source: "feature-api",         target: "api-client",           ...arrow },
  { id: "e-svc-client",        source: "shared-services",     target: "api-client",           ...arrow },

  // apiClient ↔ stores
  { id: "e-client-loanstore",  source: "api-client",          target: "loan-store",           ...arrow, style: { ...arrow.style, stroke: "#818cf8" } },
  { id: "e-loanstore-client",  source: "loan-store",          target: "api-client",           ...arrow, style: { ...arrow.style, stroke: "#818cf8", strokeDasharray: "4 3" } },
  { id: "e-stagestore-hooks",  source: "stage-store",         target: "shared-hooks",         ...arrow, style: { ...arrow.style, stroke: "#818cf8" } },

  // Hooks read stores
  { id: "e-shooks-lstore",     source: "shared-hooks",        target: "loan-store",           ...arrow, style: { ...arrow.style, stroke: "#818cf8", strokeDasharray: "4 3" } },
  { id: "e-fhooks-sstore",     source: "feature-hooks",       target: "stage-store",          ...arrow, style: { ...arrow.style, stroke: "#818cf8", strokeDasharray: "4 3" } },

  // UI Lib / Config
  { id: "e-feature-ui",        source: "feature-pages",       target: "ui-lib",               ...arrow, style: { ...arrow.style, strokeDasharray: "4 3" } },
  { id: "e-shooks-lib",        source: "shared-hooks",        target: "lib-config",           ...arrow, style: { ...arrow.style, strokeDasharray: "4 3" } },

  // apiClient → backend
  { id: "e-client-backend",    source: "api-client",          target: "backend",              ...arrow },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function SystemArchitecture(): JSX.Element {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div className="h-[800px] rounded-3xl border border-border bg-card mb-20">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        minZoom={0.2}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} color="#333" gap={20} />
        <Controls />
        <MiniMap
          nodeColor={(n) => {
            const s = n.style as React.CSSProperties | undefined;
            return (s?.border as string)?.replace("1.5px solid ", "") ?? "#555";
          }}
          style={{ background: "#1a1a1a" }}
        />
      </ReactFlow>
    </div>
  );
}

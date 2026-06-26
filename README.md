ecommerce/
│
├── public/
│
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
│
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   │
│   │   ├── (shop)/
│   │   │   ├── page.tsx
│   │   │   ├── products/
│   │   │   ├── categories/
│   │   │   ├── cart/
│   │   │   ├── checkout/
│   │   │   ├── wishlist/
│   │   │   └── orders/
│   │   │
│   │   ├── admin/
│   │   │   ├── dashboard/
│   │   │   ├── products/
│   │   │   ├── categories/
│   │   │   ├── coupons/
│   │   │   ├── users/
│   │   │   └── orders/
│   │   │
│   │   ├── api/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── forms/
│   │   └── ui/
│   │
│   ├── features/
│   │   ├── auth/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── product/
│   │   ├── category/
│   │   ├── wishlist/
│   │   ├── order/
│   │   ├── payment/
│   │   └── user/
│   │
│   ├── hooks/
│   │
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── auth.ts
│   │   ├── razorpay.ts
│   │   ├── utils.ts
│   │   └── validations/
│   │
│   ├── services/
│   │
│   ├── store/
│   │
│   ├── types/
│   │
│   ├── constants/
│   │
│   ├── config/
│   │
│   ├── styles/
│   │
│   └── middleware.ts
│
├── .env.local
├── next.config.ts
├── tsconfig.json
└── package.json
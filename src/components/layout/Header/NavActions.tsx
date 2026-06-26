import Link from "next/link";
import { Heart, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavActions() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" asChild>
        <Link href="/wishlist">
          <Heart className="h-5 w-5" />
        </Link>
      </Button>

      <Button variant="ghost" size="icon" asChild>
        <Link href="/cart">
          <ShoppingCart className="h-5 w-5" />
        </Link>
      </Button>

      <Button variant="ghost" size="icon" asChild>
        <Link href="/login">
          <User className="h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}
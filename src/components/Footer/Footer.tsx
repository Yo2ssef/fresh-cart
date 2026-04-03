import Image from "next/image";
import logo from "@images/logo.svg";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  Truck,
  RotateCcw,
  ShieldCheck,
  Headset,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full text-sm">
      {/* Features Banner */}
      <div className="bg-[#f0fdf4] py-8 border-b border-emerald-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                <Truck className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[15px] font-bold text-slate-800">Free Shipping</h4>
                <p className="text-[13px] text-slate-500">On orders over 500 EGP</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                <RotateCcw className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[15px] font-bold text-slate-800">Easy Returns</h4>
                <p className="text-[13px] text-slate-500">14-day return policy</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[15px] font-bold text-slate-800">Secure Payment</h4>
                <p className="text-[13px] text-slate-500">100% secure checkout</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                <Headset className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[15px] font-bold text-slate-800">24/7 Support</h4>
                <p className="text-[13px] text-slate-500">Contact us anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0f172a] text-slate-300 pt-16 pb-8">
        <div className="grid container mx-auto px-6 lg:px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 ">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 bg-white w-max px-3 py-2 rounded-md">
              <Image
                src={logo}
                alt="FreshCart Logo"
                width={170}
                height={30}
                className="h-6 w-auto"
              />
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href="tel:+18001234567"
                className="flex items-center gap-3 transition-colors hover:text-green-500 group"
              >
                <Phone className="w-5 h-5 text-green-500" />
                <span className="group-hover:text-green-500">
                  +1 (800) 123-4567
                </span>
              </a>
              <a
                href="mailto:support@freshcart.com"
                className="flex items-center gap-3 transition-colors hover:text-green-500 group"
              >
                <Mail className="w-5 h-5 text-green-500" />
                <span className="group-hover:text-green-500">
                  support@freshcart.com
                </span>
              </a>
              <div className="flex items-start gap-3 transition-colors hover:text-green-500 group cursor-pointer">
                <MapPin className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="group-hover:text-green-500">
                  123 Commerce Street, New York, NY 10001
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-green-500 hover:text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-green-500 hover:text-white"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-green-500 hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-green-500 hover:text-white"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Shop</h3>
            <ul className="space-y-4">
              {[
                "All Products",
                "Categories",
                "Brands",
                "Electronics",
                "Men's Fashion",
                "Women's Fashion",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 transition-colors hover:text-green-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Account</h3>
            <ul className="space-y-4">
              {[
                "My Account",
                "Order History",
                "Wishlist",
                "Shopping Cart",
                "Sign In",
                "Create Account",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 transition-colors hover:text-green-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              {[
                "Contact Us",
                "Help Center",
                "Shipping Info",
                "Returns & Refunds",
                "Track Order",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 transition-colors hover:text-green-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-400 transition-colors hover:text-green-500"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 my-8" />

        {/* Bottom Section */}
        <div className="flex container mx-auto flex-col px-6 lg:px-8 md:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 FreshCart. All rights reserved.</p>
          <span className="text-lg">{`<BuiltWithCode by="Youssef" />`}</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-slate-300 transition-colors cursor-pointer">
              <CreditCard className="w-4 h-4" /> Visa
            </span>
            <span className="flex items-center gap-2 hover:text-slate-300 transition-colors cursor-pointer">
              <CreditCard className="w-4 h-4" /> Mastercard
            </span>
            <span className="flex items-center gap-2 hover:text-slate-300 transition-colors cursor-pointer">
              <CreditCard className="w-4 h-4" /> PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

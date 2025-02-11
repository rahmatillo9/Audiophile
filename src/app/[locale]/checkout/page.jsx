"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getFormData, validate } from "@/lib/utils";
import { toast } from "sonner";

export default function page() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    const check = validate(data);

    if (check === null) {
      // send backend
    } else {
      const { message, target } = check;
      toast.error(message);
      e.target[target].focus();
    }
  }
  return (
    <section className="py-14 md:py-20 bg-slate-100 h-full">
      <div className="base-container">
        <div className="w-full">
          <div className="w-2/3 bg-white rounded-sm shadow-sm">
            <div>
              <h1 className="font-bold text-3xl mb-10 uppercase">Checkout</h1>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name">name</Label>
                  <Input type="text" id="" name="username" placeholder="name" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="phone">phone</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="phone"
                  />
                </div>
                <Button>Submit</Button>
              </form>
            </div>
          </div>
          <div className="w-2/6"></div>
        </div>
      </div>
    </section>
  );
}

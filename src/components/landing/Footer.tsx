import { Flame } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="border-t border-border py-8 bg-background">
    <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center">
          <img
            src={logo}
            alt="Luis Phillipe Personal Trainer"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40"
          />
        </span>
        <span className="font-display tracking-wider text-sm">
          LUIS<span className="text-gold">.</span>PHILLIPE
        </span>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        Desenvolvido por: Sérgio Junior - © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;

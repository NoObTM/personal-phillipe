import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Luis Phillipe Personal Trainer"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40"
          />
          <span className="font-display text-lg tracking-wider hidden sm:inline">
            LUIS<span className="text-gold">.</span>PHILLIPE
          </span>
        </a>
        <Button asChild size="sm" variant="gold">
          <a href="#contato">Fale comigo</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;

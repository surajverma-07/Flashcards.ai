import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 w-full max-w-8xl">
      <div className="flex">
        <div className="relative p-px overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant={"secondary"}
            className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
          >
            <Sparkles className="h-8 w-8 mr-2 text-rose-600 animate-pulse" />
            <p className="text-base text-rose-500">Powered by AI</p>
          </Badge>
        </div>
      </div>
      <h1 className="font-bold py-6 text-center text-4xl sm:text-5xl lg:text-6xl  leading-tight text-gray-900">
        Transform Your PDFs into Flashcards
      </h1>
      <h2 className="text-center text-lg sm:text-xl lg:text-2xl px-4 lg:px-0 lg:max-w-4xl text-gray-600">
        Get a beautiful summary reel of the document in seconds.
      </h2>
      <div>
        <Button 
        variant={"link"} 
        className="text-white mt-6 text-base sm:text-lg rounded-full px-8 sm:px-10 py-6 sm:py-7 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg transition-all duration-300">
          <Link href={"/#pricing"} className="flex gap-2 items-center">
            <span>Try FlashCard</span>
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

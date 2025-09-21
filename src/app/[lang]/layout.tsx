import { LangProvider } from "@/i18n/LangProvider";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import { Langs } from "@/types";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher/LanguageSwitcher";

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Langs }>;
}) {
  const { lang } = await params;

  return (
    <>
      <LangProvider lang={lang}>
        <LanguageSwitcher lang={lang} />
        <Header lang={lang} />
        {children}
        <Footer />
      </LangProvider>
    </>
  );
}

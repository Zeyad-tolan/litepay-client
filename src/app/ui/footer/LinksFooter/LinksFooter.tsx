import CompanyLinksFooter from "./CompanyLinksFooter";
import LanguagesLinksFooter from "./LanguagesLinksFooter";
import LegalLinksFooter from "./LegalLinksFooter";

export default function LinksFooter() {
  return (
    <div className="sm:flex sm:gap-20 grid grid-cols-2 gap-4">
      <CompanyLinksFooter />
      <LanguagesLinksFooter />
      <LegalLinksFooter />
    </div>
  );
}

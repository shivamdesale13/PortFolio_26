import type { PortfolioContent } from "../../types/portfolio";

type SiteFooterProps = {
  footer: PortfolioContent["footer"];
};

export default function SiteFooter({ footer }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <p>{footer.copyright}</p>
      <p>{footer.builtWith}</p>
    </footer>
  );
}

import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";
import { LINKS, PERSON, REPO_NAME } from "@/content/person";

// Fixed when the site is built; the pages are static, so this is the year of the latest deploy.
const BUILD_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <Container className="py-10 text-sm text-muted">
        <p>
          © {BUILD_YEAR} {PERSON.name}. Built with Next.js.{" "}
          <TextLink href={LINKS.repo}>Source on GitHub ({REPO_NAME})</TextLink>.
        </p>
      </Container>
    </footer>
  );
}

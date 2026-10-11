import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";
import { LINKS, PERSON, REPO_NAME } from "@/content/person";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <Container className="py-10 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {PERSON.name}. Built with Next.js.{" "}
          <TextLink href={LINKS.repo}>Source on GitHub ({REPO_NAME})</TextLink>.
        </p>
      </Container>
    </footer>
  );
}

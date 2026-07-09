import RouteRedirect from "@/components/RouteRedirect";

export function generateStaticParams() {
  return [{ id: "redirect" }];
}

export default function ProjectDetailRedirect() {
  return <RouteRedirect hash="project-types" />;
}

// Pull requests that were merged upstream, exactly as listed in the README of the GitHub profile.

export type OpenSourceFix = { project: string; pullRequest: string; change: string };

export const openSourceFixes: OpenSourceFix[] = [
  {
    project: "Spring Cloud Stream",
    pullRequest: "https://github.com/spring-cloud/spring-cloud-stream/pull/3296",
    change:
      "DefaultBinderFactory no longer starts plain lifecycle beans in binder contexts during a normal refresh (gh-3155). Backported to 5.0.x.",
  },
  {
    project: "Apache Commons Lang",
    pullRequest: "https://github.com/apache/commons-lang/pull/1812",
    change:
      "TypeUtils.containsTypeVariables and unrollVariables honour the owner type of a ParameterizedType (LANG-1836).",
  },
  {
    project: "Micronaut Core",
    pullRequest: "https://github.com/micronaut-projects/micronaut-core/pull/13801",
    change: "An Accept-Charset header is ignored when reading String request bodies.",
  },
  {
    project: "SpotBugs",
    pullRequest: "https://github.com/spotbugs/spotbugs/pull/4377",
    change: "RV_RETURN_VALUE_IGNORED_NO_SIDE_EFFECT now reports an ignored Arrays.copyOf result.",
  },
  {
    project: "ArchUnit",
    pullRequest: "https://github.com/TNG/ArchUnit/pull/1747",
    change: "New haveOnlyFinalNonSyntheticFields() condition that skips compiler-generated fields.",
  },
  {
    project: "OpenFeign",
    pullRequest: "https://github.com/OpenFeign/feign/pull/3605",
    change: "A null Request.Body is treated as a request with no body.",
  },
];

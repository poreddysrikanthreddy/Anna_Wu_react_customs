import { initPlasmicLoader } from "@plasmicapp/loader-react";
import { HelloWorld } from "./components/HelloWorld";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "iHk6jMiWChyc6fQLxCASj8",  // ID of a project you are using
      token: "H7rrY3hEHYWzdUdQJdFnpgpAaIlbjezbN5OQ8aix6ZNJHKJUVafifiwWhXOJDg38lPPuzeNA6ZniNUgU9jODw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

PLASMIC.registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
});
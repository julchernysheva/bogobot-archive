import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()

// Render a folder's own index.md as normal page content instead of letting
// FolderPage (priority 10) shadow it with an empty folder-listing body.
// FolderPage.match only runs on real files (dispatcher Phase 2); folder listings
// for index-less folders are virtual pages emitted in Phase 3 without match(),
// so they remain unaffected.
type Matcher = (args: { slug: string; fileData?: { filePath?: string } }) => boolean
for (const pt of config.plugins?.pageTypes ?? []) {
  if (pt.name === "FolderPage") {
    const original = pt.match as Matcher
    const folderMatch: Matcher = (args) => (args.fileData?.filePath ? false : original(args))
    pt.match = folderMatch as typeof pt.match
  } else if (pt.name === "ContentPage") {
    const contentMatch: Matcher = ({ slug }) => !slug.startsWith("tags/")
    pt.match = contentMatch as typeof pt.match
  }
}

export default config
export const layout = await loadQuartzLayout()

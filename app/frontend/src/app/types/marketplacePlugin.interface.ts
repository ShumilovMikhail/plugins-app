import { MarketplacePluginVersion } from './marketplacePluginVersion.interface';

export interface MarketplacePlugin {
  slug: string;
  latestVersion: string | null;
  versions: MarketplacePluginVersion[];
}

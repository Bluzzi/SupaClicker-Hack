import { SPECIAL_ITEMS } from "./special-items";
import { UPGRADE_IDS } from "./upgrades";

export const payload = {
  prestigeLevel: 50,
  totalClicks: 10_000_000,
  totalPower: 107852330926526550000,
  currentPower: 93135952033890800000,
  currentResources: 93135952033890800000, // ???
  clickPower: 4714189176.987591, // point per click?
  pps: 357820158263053.7, // points per second?
  resourcesPerSecond: 357820158263053.7, // ???
  comboCount: 100, // click combo
  comboActive: true,
  upgrades: Object.values(UPGRADE_IDS).reduce<Record<number, number>>((acc, id) => {
    acc[id] = 100;
    return acc;
  }, {}),
  specialItems: SPECIAL_ITEMS.reduce<Record<number, number>>((acc, item) => {
    acc[item.id] = item.maxPurchases !== undefined ? item.maxPurchases : 100;
    return acc;
  }, {}),
  /**
   * @see {@link https://github.com/Steellgold/supa-clicker/blob/hackathon/lib/achievements.ts}
   * for maximum achievements
   */
  unlockedAchievements: Array.from({ length: 30 }, (_, i) => i + 1),
  /**
   * @see {@link https://github.com/Steellgold/supa-clicker/blob/hackathon/lib/prestige.ts}
   * for maximum prestige
  */

  // ...
  lastClickTime: 1753214515059,
  lastSaveTime: 1753214555611,
  timeBoostActive: false,
  timeBoostEndTime: 0,
  timeBoostMultiplier: 1,
  purchasedUpgrades: [],
  purchasedSpecialItems: [],
  nextUpgradeCosts: {},
  nextSpecialItemCosts: {},
};

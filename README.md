<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# Loot System 2.0

### 1. Description

The **Firestorm** dev studio is working on their new triple-A RPG game "Luciferio II" and the developers are shooting for a close release window. They have hired a junior programmer to work on the loot system, managing game items like armor, weapons and amulets, but the developer has met a few difficulties with their approach to coding.

Their initial idea to have one base `Item` class and derive new item bases from there. All derived classes will either have **health**, **strength**, or both. The junior dev has used inheritance to achieve this result, but then the designers have asked him to add a few more **item stats**. The list of available stats have grown from `[Health, Strength]` to `[Health, Strength, Intelligence, Damage, Critical Chance, Critical Damage]`. Further more, there should be four tiers of items - **common** tier items will have one **random** stat, **magic** tier items will have two, **rare** tier items will have three, and **unique** tier items will have four random stats.

The junior programmer has come to the understanding inheritance will not work as a solution, given the possible combinations of all items for each base (armor, weapon, amulet) is *516*, exploding the total count of item derives classes to over 1500! Adding more item stats will grow the number of required classes almost exponentially.

After a ton of research the junior programmer has decided to use composition instead of inheritance, but since he's unexperienced with that approach he will need you help.

<br>

### 2. Project information

- Language and version: **JavaScript ES2020**
- Platform and version: **Node 16.0+**
- Core Packages: **ESLint**

<br>

### 3. Goals

The **goal** is refactor the code base and replace all inheritance with composition. You are provided with partial implementation and in order to achieve the goals below you will need to modify existing classes, delete classes and files and/or create new ones.

Your main task is to replace all **Item** classes with just one base **Item** class that will represent every possible item stats count and their variations and combinations.

You will need to complete the implementation of the **GameManager** class (described below) and refactor the **Hero** class to work with this new kind of game items (represented by the single **Item** class).

- Working with classes - writing classes and creating instances of those classes.
- Modeling classes using `fields` (state) and `methods` (behavior).
- Exposing state for reading and writing through getters and setters.
- Protecting the state by implementing validation of values passed to setters
- Using static members for sharing state and behavior between class instances
- Using composition to achieve flexibility and extendibility

<br>

### 4. Setup

To get the project up and running, follow these steps:

1. Go inside the `Template` folder.
1. Run `npm install` to restore all dependencies.
1. After that, there are a few scripts you can run:

   - `npm run start` (shorthand: `npm start`) - Runs the `src/main.js` file.
   - `npm run lint` - Lints the code inside the `src` folder using **ESLint**.

<br>

### 5. Project structure

All of the code you will be working with is in the `src` folder. The entry point (the file from which the program is started) is `src/main.js`. There are a few folders and files:

- `src/common` - holds all of the project enums and enum functionalities
- `src/engine` - holds the **GameManager** class which is responsible for initializing new *heroes* and *items*
- `src/models` - has all of the project models such as *item* models, **Hero** and the empty (for now) **Stat** class
- `src/items` - has all of the item classes where the base class is **Item**, **Amulet**, **Armor** and **Weapon** derive from item and further derivation is made of these three classes as well

There are no unit tests provided for this project. You will need to follow the guidance below and depend on your knowledge, skills, and wits.

<br>

### 6. Problems with existing codebase

As it was mentioned already current project implementation depends heavily on inheritance which would not be a problem in certain cases where a high amount of polymorphism is **not** required. However, the looting system is in need of great variability of objects which cannot be achieved with inheritance only.

If you look at the code all items derive from the base **Item** class, then you have further derivation from there:

**Item** -> **Armor**

**Item** -> **Weapon**

**Item** -> **Amulet**

**Item** -> **Amulet** -> **CommonHealthAmulet**

**Item** -> **Amulet** -> **CommonStrengthAmulet**

**Item** -> **Amulet** -> **CommonStrengthAmulet** -> **MagicHealthStrengthAmulet**

This solution is not scalable.

If you inspect codebase carefully you will discover other problems as well. There is a typo in the `printItemInto` method of the **Amulet** class resulting of printing the incorrect item type.

You will address all these problem in a fairly good way by following the steps below.

<br>

### 7. The `Stat` model

Items stats are the base building block of the app. Current implementation has the stats as fields/properties inside derived classes, as each class represents different variation and combination of stats, i.e. **CommonHealthAmulet** is an **Amulet** class that has just one stat - `health`, **CommonStrengthAmulet** has just `strength`, while **MagicHealthAndStrengthAmulet** has both `health` and `strength`. It is impossible (actually possible, but horrible to do) to implement all possible variations of stats as different classes.

The other approach is to use *composition*. Each item might have one or more stats (or compose) them depending on how we choose to *contain* them in the class. We will cross that bridge after a while.

Let's implement the **Stat** model first. The reasoning for this model is it will contain just one stat, it's value and the way it is calculated (either as flat value, i.e. 20 `health` means total health increases with 20, or as multiplier, i.e. 20 `health` means 20% on top of the flat value or a total multiplier of `1.2`).

The **Stat** model should have the following properties and methods

Properties:

- `type` - **readonly** `statType` value, validated
- `value` - **readonly** positive number, validated
- `applyType` - **readonly** `statApplyType` value, validated

Methods:

- `apply(stat): number` - depending on the `applyType` - if `statApplyType.FLAT` returns the stat value incremented with the `value` property, else returns the stat multiplied by the percentage, i.e. if stat=50 and value=20, it should return the stat 50 multiplied by 1.20 (added 20%) = 60

Example usage:

```js
const stat = new Stat(statType.DAMAGE, 10, statApplyType.FLAT);
```

<br>

### 8. The `Item` model

Now that we have the stats implemented as a model, we can refactor the **Item** model. First, you don't need the `Armor`, `Amulet`, and `Weapon` folders and filed inside, you can delete them as they only complicate the project.

Since we will use just one model to represent different count and type of stats, it's good to think of a way to compose **Item** with **Stat** and made the composition flexible enough to allow for this type of variability. We should use some kind of *container* for value where we can access each value by a specific type. The `Map` data structure is the one we're going to utilize for this. Instead of each **Item** instance having specific stat properties we're going to hold a collection of **Stat** instances inside a map.

Refactor the **Item** model following the requirements below:

Properties:

- `name` - readonly string, length in the range `[2, 100]`
- `type` - readonly `itemType` value
- `rarity` - readonly `itemRarity` value
- `stats` - readonly `Map` instance, validated, getter should return a **copy** of the map

Methods:

- `printItemInfo()` - should return a string with the item description in the following format (this is an example output of a specific item instance)
```
  Name: Tyrael's Might
  Type: ARMOR
  Rarity: COMMON
  ---Stats---
  HEALTH: +25
  INTELLIGENCE: +20
  CRIT_CHANCE: +20
```

where stats are calculated for each individual stat instance contained in the `stats` map

<br>

### 9. The `Hero` model

The `Hero` model is already implemented for the most parts and the good news is you will need to refactor only the private `#calculateFlatAndMultiplier` method. It should continue to have the same signature and return type. However, since you have made general changes to the **Item** model, you will need to update the implementation of `#calculateFlatAndMultiplier` so it will calculate the result based on the `stats` map. Before that calculations were made based on a check of property existence in an object.

Take a moment a make the calculations on a list of paper and iron out the logic before you try to refactor the code.

<br>

### 10. The **GameManager** class

As you might have already seen this class has only static members, so it will behave like a *singleton* (or imitating only one, single instance without actually being an instance). It has one public method for creating heroes and one private method `#calculateRarity` which will return a random `itemRarity` value based on a chance.

You might also see the `dropRandomItem` method that is not implemented yet. This method should overall create and return a random item, with random rarity, random count and type of stats (the count is based on the rarity - **common** items have 1 stat, **magic** have 2, **rare** have 3, and **unique** have 4).

1. calculate the rarity of the item
2. create a `Map` instance that will hold the stats (*key* will be `statType` value, *value* will be a **Stat** instance)
3. create a random name which will be a string in the range of `[6, 11]` letters (length is random in the range)
4. calculate the type of the item (a random value of the `itemType` enum)
5. based on the rarity pick random `statType` values (should not be duplicates), create instances of the **Stat** model for each stat, the value of the stat should be a random number in the range of `[1, 100]` and the *applyType* should be a random `statApplyType` value
6. compose all of the above to create and return a new **Item** instance

As you see the `dropRandomItem` method is the penultimate composition unit in this project. Take some time to reflect on why you would prefer composition over inheritance and what exact problem you can solve with it.

<br>

### 11. Code quality

You have already inspected the original implementation of the loot system and know there were a ton of problems. There might be some you have missed like skipped validation, hardcoded numbers and strings, etc. Make sure you have addressed all the issues.

<br>

### 12. Testing

You can modify the contents of `src/main.js` as you like in order to test **Stat**, **Item**, **Hero**, and **GameManager**. You are also provided with the following test code for testing overall integration minus the `dropRandomItem` method.

Example test:

```js
// Create an armor
const armorStats = new Map();

armorStats.set(statType.HEALTH, new Stat(statType.HEALTH, 25, statApplyType.FLAT));
armorStats.set(statType.INTELLIGENCE, new Stat(statType.INTELLIGENCE, 20, statApplyType.PERCENTAGE));
armorStats.set(statType.CRIT_CHANCE, new Stat(statType.CRIT_CHANCE, 20, statApplyType.FLAT));
const armor = new Item(`Tyrael's Might`, itemType.ARMOR, itemRarity.COMMON, armorStats);

// Create a weapon
const weaponStats = new Map();

weaponStats.set(statType.HEALTH, new Stat(statType.HEALTH, 25, statApplyType.FLAT));
weaponStats.set(statType.STRENGTH, new Stat(statType.STRENGTH, 40, statApplyType.FLAT));
weaponStats.set(statType.CRIT_DAMAGE, new Stat(statType.CRIT_DAMAGE, 300, statApplyType.PERCENTAGE));
const weapon = new Item('Dragnipur', itemType.WEAPON, itemRarity.COMMON, weaponStats);

// Create an amulet
const amuletStats = new Map();

amuletStats.set(statType.HEALTH, new Stat(statType.HEALTH, 50, statApplyType.PERCENTAGE));
amuletStats.set(statType.DAMAGE, new Stat(statType.DAMAGE, 10, statApplyType.PERCENTAGE));
const amulet = new Item('Astramentis', itemType.AMULET, itemRarity.COMMON, amuletStats);

const hero = GameManager.createHero('Madawc');

console.log(armor.printItemInto());

hero.equip(armor);
hero.equip(weapon);
hero.equip(amulet);

console.log(hero.printHeroInfo());
```

Example output:

```
  Name: Tyrael's Might
  Type: ARMOR
  Rarity: COMMON
  ---Stats---
  HEALTH: +25
  INTELLIGENCE: +20%
  CRIT_CHANCE: +20
  

Name: Madawc
Health: 225.00
Defense: 150.00
Damage: 67.70
Strength: 65.00
Intelligence: 24.00
Crit chance: 20.00
Crit damage: 270.80
```

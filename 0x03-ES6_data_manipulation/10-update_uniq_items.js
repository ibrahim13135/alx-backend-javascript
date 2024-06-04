export default function updateUniqueItems(groceriesMap) {
    if (typeof groceriesMap !== 'object' || Array.isArray(groceriesMap)) {
      throw new Error('Cannot process');
    }
  
    for (const [item, quantity] of Object.entries(groceriesMap)) {
      if (quantity === 1) {
        groceriesMap[item] = 100;
      }
    }
  
    return groceriesMap;
  }
  
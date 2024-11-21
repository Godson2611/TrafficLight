function minCoinsWeNeed(coins, target) {
    for (let i = 0; i < coins.length; i++) {
        for (let j = i + 1; j < coins.length; j++) {
            if (coins[i] < coins[j]) {
                let temp = coins[i];
                coins[i] = coins[j];
                coins[j] = temp;
            }
        }
    }

    let count = 0;
    let remaining = target;
    let selectedCoin = -1;

    for (let i = 0; i < coins.length; i++) {
        while (remaining >= coins[i]) {
            remaining -= coins[i];
            count++;
            selectedCoin = coins[i];
        }
        if (remaining === 0) break;
    }

    if (remaining > 0) {
        return "Not possible with given coins";
    }

    return `${count} of ${selectedCoin}`;
}

console.log(minCoinsWeNeed([25, 10, 5], 30));
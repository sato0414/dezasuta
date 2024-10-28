let sum = 0;

// 1から10までの数字を足す
for (let i = 1; i <= 10; i++) {
    sum += i;
}

// 合計が20以上かどうかを判定
if (sum >= 20) {
    console.log("20以上");
} else {
    console.log("20未満");
}
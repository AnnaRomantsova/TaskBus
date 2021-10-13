
let K = 600;
let N = 2000;

let A = Math.round(N / K);
let B = N - A * K;

if (B < K / 2) {
  console.log(B);
} else if (B >= K / 2) {
  console.log(K - B);
}
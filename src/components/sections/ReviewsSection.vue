<script setup lang="ts">
import r1 from '@/assets/imgs/r1.png'
import r2 from '@/assets/imgs/r2.png'
import r3 from '@/assets/imgs/r3.png'

// 디자인의 후기 말풍선. 추가 후기는 이 배열에 넣으면 자동 배치된다.
const reviews = [r1, r2, r3] as const
</script>

<template>
  <section id="reviews" class="section section--yellow reviews">
    <div class="container">
      <h2 class="reviews__title">
        <span class="pill-title">참가자들의 후기</span>
      </h2>
      <div class="reviews__list">
        <div class="flex flex-col md:flex-row md:justify-center gap-6">
          <div class="bubble">
            <img :src="r1" alt="솔루나 후기 1" class="mr-5" loading="lazy" />
          </div>
          <div class="bubble bubble--right">
            <img :src="r2" alt="솔루나 후기 1" class=" " loading="lazy" />
          </div>
        </div>
        <div class="flex md:justify-center">
          <img :src="r3" alt="솔루나 후기 1" class="bubble" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews__title {
  text-align: center;
  margin-bottom: var(--space-8);
}

.reviews__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.bubble {
  max-width: 90%;
}

.bubble--right {
  align-self: flex-end;
  text-align: right;
}

.bubble__text {
  margin: 0;
  display: inline-block;
  background: var(--color-yellow-deep);
  color: var(--color-navy);
  font-weight: var(--fw-semibold);
  padding: 1rem 1.4rem;
  border: 3px solid var(--color-navy);
  border-radius: var(--radius-lg);
  line-height: 1.5;
}

.bubble__author {
  margin-top: var(--space-1);
  font-weight: var(--fw-bold);
  color: var(--color-navy);
}

@media (min-width: 720px) {
  .bubble {
    max-width: 55%;
  }
}
</style>

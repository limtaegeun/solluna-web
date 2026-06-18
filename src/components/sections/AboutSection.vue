<script setup lang="ts">
import d3 from '@/assets/imgs/d3.webp'
</script>

<template>
  <section id="about" class="section section--dark about">
    <div class="container about__inner">
      <div class="about__copy">
        <h2 class="about__title">솔루나는 어떤 곳인가요?</h2>
        <p class="about__text">
          혼자서는 시작하기 어려웠던 취미도,<br />
          함께할 사람이 있다면 더 즐거워집니다.
        </p>
        <p class="about__text">
          솔루나는 소셜게임을 좋아하는 사람들이<br />
          자유롭게 모이고 연결되는 커뮤니티입니다.
        </p>
      </div>
      <div class="about__art" aria-hidden="true">
        <img :src="d3" alt="솔루나 커뮤니티를 상징하는 일러스트" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__inner {
  display: grid;
  gap: var(--space-6);
  align-items: center;
}

.about__title {
  font-size: var(--fs-h2);
  font-weight: var(--fw-bold);
  color: var(--color-yellow);
  margin-bottom: var(--space-3);
}

.about__text {
  color: rgba(251, 245, 233, 0.85);
}

.about__text + .about__text {
  margin-top: var(--space-2);
}

.about__art {
  border-radius: 16px;
  overflow: hidden;
}

@media (min-width: 800px) {
  .about__inner {
    grid-template-columns: 1.4fr 1fr;
  }
}
</style>

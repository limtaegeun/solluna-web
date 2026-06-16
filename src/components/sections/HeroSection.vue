<script setup lang="ts">
import { LINKS } from '@/constants/links'
import heroImage from '@/assets/imgs/루나가든 보드게임.jpg'
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero__inner">
      <div class="hero__copy">
        <p class="hero__eyebrow">취향으로 연결되는 오프라인 소셜 모임</p>
        <h1 class="hero__title">
          지루한 일상 대신,<br />
          새로운 사람들과<br />
          <span class="hero__hl">특별한 시간</span>을 가져보세요.
        </h1>
        <p class="hero__sub">
          보드게임, 머더미스터리부터 와인까지 — 솔루나에서 취향이 맞는 사람들과 만나요.
        </p>
        <a class="cta-button cta-button--accent hero__cta" :href="LINKS.ogotoClub" target="_blank" rel="noopener">
          모임 둘러보기 →
        </a>
      </div>
      <div class="hero__media">
        <img :src="heroImage" alt="솔루나 보드게임 모임 현장" loading="eager" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--color-cream);
  padding-block: clamp(2.5rem, 7vw, 5rem);
}

.hero__inner {
  display: grid;
  gap: var(--space-6);
  align-items: center;
}

.hero__eyebrow {
  display: inline-block;
  background: var(--color-navy);
  color: var(--color-yellow);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-small);
  padding: 0.35rem 0.9rem;
  border-radius: var(--radius-pill);
  margin-bottom: var(--space-3);
}

.hero__title {
  font-size: var(--fs-hero);
  font-weight: var(--fw-bold);
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--color-navy);
}

.hero__hl {
  background: linear-gradient(transparent 60%, var(--color-yellow) 60%);
  padding: 0 0.1em;
}

.hero__sub {
  margin-top: var(--space-3);
  color: var(--color-ink-soft);
  font-size: var(--fs-body);
}

.hero__cta {
  margin-top: var(--space-4);
}

.hero__media img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  object-fit: cover;
  aspect-ratio: 4 / 3;
}

@media (min-width: 860px) {
  .hero__inner {
    grid-template-columns: 1.1fr 1fr;
    gap: var(--space-8);
  }
}
</style>

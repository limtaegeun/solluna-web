<script setup lang="ts">
import { LINKS } from '@/constants/links'
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <a href="#top" class="header__logo">솔루나</a>
      <nav class="header__nav">
        <a href="#gallery">모임</a>
        <a href="#reviews">후기</a>
        <a href="#about">소개</a>
      </nav>
      <a class="cta-button cta-button--accent header__cta" :href="LINKS.ogotoClub" target="_blank" rel="noopener">
        가입하기
      </a>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--color-cream);
  border-bottom: 1px solid var(--color-line);
}

.header__inner {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  height: 64px;
}

.header__logo {
  font-weight: var(--fw-bold);
  font-size: 1.375rem;
  color: var(--color-navy);
  letter-spacing: -0.02em;
}

.header__nav {
  display: none;
  gap: var(--space-3);
  margin-left: auto;
  font-weight: var(--fw-semibold);
  color: var(--color-ink-soft);
}

.header__nav a:hover {
  color: var(--color-navy);
}

.header__cta {
  margin-left: auto;
  padding: 0.55rem 1.2rem;
  font-size: var(--fs-small);
}

@media (min-width: 768px) {
  .header__nav {
    display: flex;
  }
  .header__cta {
    margin-left: 0;
  }
}
</style>

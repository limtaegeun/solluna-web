<script setup lang="ts">
import { LINKS } from '@/constants/links'
import insta from '@/assets/imgs/insta.png'
import thread from '@/assets/imgs/thread.png'

const socials = [
  { label: 'Instagram', href: LINKS.instagram, icon: insta },
  { label: 'Threads', href: LINKS.threads, icon: thread },
]
</script>

<template>
  <footer class="footer">
    <div class="container flex flex-col items-center">
      <div class="footer__brand">
        <span class="footer__logo">저희에 대해 더 자세히 알아보세요!</span>
      </div>
      <nav class="footer__socials flex-col md:flex-row mt-10" aria-label="소셜 채널">
        <a
          v-for="s in socials"
          :key="s.label"
          class="footer__social"
          :href="s.href"
          target="_blank"
          rel="noopener"
        >
          <div class="rounded-sm overflow-hidden">
            <img :src="s.icon" class="w-10 aspect-square" :alt="s.label" />
          </div>
          <span>{{ s.label }}</span>
        </a>
      </nav>
    </div>
    <p class="footer__copy">© {{ new Date().getFullYear() }} 솔루나. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-navy);
  color: var(--color-cream);
  padding-block: var(--space-8) var(--space-4);
}

.footer__inner {
  gap: var(--space-4);
}

.footer__logo {
  font-size: 1.5rem;
  font-weight: var(--fw-bold);
  color: var(--color-yellow);
}

.footer__tag {
  margin-top: var(--space-1);
  color: rgba(251, 245, 233, 0.7);
  font-size: var(--fs-small);
}

.footer__socials {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.footer__social {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem 1.8rem;
  border-radius: var(--radius-pill);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-small);
  transition: background 0.15s ease;
}

.footer__social:hover {
  background: rgba(255, 255, 255, 0.16);
}

.footer__copy {
  margin-top: var(--space-6);
  text-align: center;
  color: rgba(251, 245, 233, 0.5);
  font-size: var(--fs-small);
}

@media (min-width: 720px) {
  .footer__inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}
</style>

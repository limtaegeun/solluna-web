<script setup lang="ts">
import { LINKS } from '@/constants/links'

// ⚠️ 카피 확인 필요: 디자인 "커뮤니티에 가입하려면" 영역의 정확한 단계 문구로 교체하세요.
const steps = [
  {
    title: '📅 새로운 일정 소식을 가장 빠르게 받아볼 수 있어요!',
    text: '보드게임, 머더 미스터리, 마피아 게임 등 다양한 일정을 확인해보세요.',
  },
  {
    title: '🗝️ 언제든 모임에 참여할 수 있어요!',
    text: '관심 있는 일정이 있다면 바로 신청하고 함께 즐길 수 있습니다.',
  },
  {
    title: '🌙 솔루나의 문화를 경험할 수 있어요!',
    text: '좋은 사람들과 건강한 소셜게임 문화를 만들어갑니다.',
  },
]
</script>

<template>
  <section class="section section--yellow join">
    <div class="container join__inner">
      <h2 class="join__title">커뮤니티에 가입하면</h2>
      <div class="join__steps">
        <div v-for="(step, i) in steps" :key="i" class="join__step">
          <p>{{ step.title }}</p>
          <ul class="list-disc pl-6">
            <li class="text-sm">{{ step.text }}</li>
          </ul>
        </div>
      </div>
      <a class="cta-button join__cta" :href="LINKS.ogotoClub" target="_blank" rel="noopener">
        가입하기
      </a>
    </div>
  </section>
</template>

<style scoped>
.join__inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.join__title {
  font-size: var(--fs-h2);
  font-weight: var(--fw-bold);
  color: var(--color-navy);
  margin-bottom: var(--space-6);
}

.join__steps {
  margin: 0 0 var(--space-6);
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
  max-width: 460px;
  width: 100%;
}

.join__step {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
  background: var(--color-cream);
  border: 2px solid var(--color-navy);
  border-radius: 16px;
  padding: 0.75rem 1.25rem;
  font-weight: var(--fw-semibold);
  color: var(--color-navy);
}
</style>

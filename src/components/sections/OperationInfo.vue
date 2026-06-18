<script setup lang="ts">
// ⚠️ 카피 확인 필요: 디자인 "솔루나 운영" 영역의 정확한 문구로 교체하세요.
const points = [
  {
    emoji: '🎲',
    title: '처음이어도 편안하게',
    desc: '검증된 호스트(GM)가 진행을 이끌어 처음이어도 편안해요.',
  },
  {
    emoji: '📍',
    title: '어디서나 만나기 쉽게',
    desc: '신촌·성신여대입구 등 역세권 위주로 모임을 열어요.',
  },
  {
    emoji: '🤝',
    title: '같은 취향의 사람들과',
    desc: '같은 게임을 좋아하는 사람들과 자연스럽게 어울릴 수 있어요.',
  },
]
</script>

<template>
  <section class="section operation">
    <div class="container">
      <h2 class="operation__title">
        <span class="pill-title">좋은 인연이 시작되는 방식</span>
      </h2>
      <div class="operation__grid">
        <div v-for="p in points" :key="p.title" class="op-item">
          <span class="op-item__emoji" aria-hidden="true">{{ p.emoji }}</span>
          <h3 class="op-item__title">{{ p.title }}</h3>
          <p class="op-item__desc">{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.operation__title {
  text-align: center;
  margin-bottom: var(--space-6);
}

.operation__grid {
  display: grid;
  gap: var(--space-4);
}

.op-item {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  text-align: center;
  box-shadow: var(--shadow-card);
}

.op-item__emoji {
  font-size: 2.5rem;
}

.op-item__title {
  margin-top: var(--space-2);
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);
  color: var(--color-navy);
}

.op-item__desc {
  margin-top: var(--space-1);
  color: var(--color-ink-soft);
  font-size: var(--fs-small);
}

@media (min-width: 720px) {
  .operation__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

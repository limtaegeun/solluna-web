<script setup lang="ts">
import space2 from '@/assets/imgs/space2.webp'

const cards = [
  {
    image: space2,
    title: '신촌역',
    subTitle: '루나 플레이스',
    desc: ['2호선', '경의중앙선'],
  },
]
</script>

<template>
  <section class="section placecards">
    <div class="container">
      <h2 class="placecards__title">
        <span class="pill-title">모임 장소를 찾아보세요</span>
      </h2>
      <div class="placecards__grid">
        <div v-for="card in cards" :key="card.title" class="card">
          <div class="card__media">
            <img :src="card.image" :alt="card.title" loading="lazy" />
          </div>
          <div class="card__body">
            <div style="display: flex; align-items: flex-end; gap: 8px">
              <h3 class="card__title">{{ card.title }}</h3>
              <p>{{ card.subTitle }}</p>
            </div>
            <ul>
              <li v-for="(d, i) in card.desc" :key="i" class="card__desc list-disc">{{ d }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.placecards__title {
  text-align: center;
  margin-bottom: var(--space-6);
}

.placecards__grid {
  display: grid;
  gap: var(--space-4);
  justify-content: center;
}

.card {
  display: block;
  background: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform 0.15s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card__media img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.card__body {
  padding: var(--space-3);
  ul {
    padding-inline-start: 18px;
  }
}

.card__title {
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);
  color: var(--color-navy);
}

.card__desc {
  margin-top: var(--space-1);
  color: var(--color-ink-soft);
  font-size: var(--fs-small);
}

@media (min-width: 720px) {
  .placecards__grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 360px));
  }
}
</style>

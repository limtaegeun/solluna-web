<script setup lang="ts">
import l1 from '@/assets/imgs/l1.webp'
import l2 from '@/assets/imgs/l2.webp'
</script>

<template>
  <section class="section section--dark valueprop">
    <div class="container">
      <h2 class="valueprop__title">
        취향이 같은 사람들과 오프라인에서<br />
        <span class="valueprop__hl">자연스럽게 연결</span>되는 소셜 모임!
      </h2>
      <p class="valueprop__sub">
        혼자서는 시작하기 어려운 취미도, 솔루나에서는 함께라서 쉽고 즐겁습니다.
      </p>
    </div>
    <div class="flex">
      <div class="flex-1">
        <img :src="l1" alt="솔루나 모임 현장" loading="lazy" />
      </div>
      <div class="flex-4">
        <img :src="l2" alt="솔루나 모임 현장" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.valueprop {
  text-align: center;
}

.valueprop__title {
  font-size: var(--fs-h2);
  font-weight: var(--fw-bold);
  line-height: 1.4;
  letter-spacing: -0.02em;
}

.valueprop__hl {
  color: var(--color-yellow);
}

.valueprop__sub {
  margin-top: var(--space-3);
  color: rgba(251, 245, 233, 0.75);
}
</style>

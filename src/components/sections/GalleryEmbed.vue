<script setup lang="ts">
import { ref } from 'vue'
import { RSVP } from '@/constants/links'

// 임베드 로드 실패(카톡·인스타 인앱 브라우저 차단 등) 시 fallback 노출
const embedFailed = ref(false)
</script>

<template>
  <section id="gallery" class="section section--dark gallery">
    <div class="container">
      <h2 class="gallery__title">
        <span class="pill-title">소셜 모임</span>
      </h2>
      <p class="gallery__sub">지금 열려있는 모임에 바로 참여해보세요.</p>

      <!-- RSVP 서비스 임베드 슬롯 -->
      <div class="gallery__embed">
        <iframe
          v-if="!embedFailed"
          src="https://ogoto.co/cal/c/YiPpnX9hsZTDdTgCihNF?noInfo=true&newTab=true"
          width="1000"
          height="450"
          frameborder="0"
          style="border: 1px solid #bfcbda88; border-radius: 4px"
          aria-hidden="false"
          tabindex="0"
          @error="embedFailed = true"
        ></iframe>
        <!-- 임베드 비활성/실패 시 fallback -->
        <div v-else class="gallery__fallback">
          <p class="gallery__fallback-text">
            지금 열려있는 모임은 오고토 페이지에서 확인할 수 있어요.
          </p>
          <a
            class="cta-button cta-button--accent"
            :href="RSVP.fallbackUrl"
            target="_blank"
            rel="noopener"
          >
            {{ RSVP.fallbackLabel }} →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  text-align: center;
}

.gallery__sub {
  margin-top: var(--space-3);
  color: rgba(251, 245, 233, 0.75);
}

.gallery__embed {
  margin-top: var(--space-6);
  background: rgba(255, 255, 255, 0.04);
  border: 1px dashed rgba(251, 245, 233, 0.25);
  border-radius: var(--radius-md);
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.gallery__iframe {
  width: 100%;
  min-height: 600px;
  border: none;
  background: var(--color-white);
}

.gallery__fallback {
  padding: var(--space-6) var(--space-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.gallery__fallback-text {
  color: rgba(251, 245, 233, 0.8);
}
</style>

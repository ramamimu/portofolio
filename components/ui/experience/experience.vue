<script lang="ts" setup>
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

import { ref, type VNodeRef } from "vue";

import { experiences } from "~/contents/experiences";

gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin);
const experienceTitleText = ref<VNodeRef | null>(null);
const experienceDescriptionText = ref<VNodeRef | null>(null);
const activeExperienceIndex = ref(0);
const showDescription = ref(false);

onMounted(() => {
  // Prevent scroll jump on refresh
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });
  const tlExperienceText = gsap.timeline({
    scrollTrigger: {
      trigger: experienceTitleText.value,
      start: "top 50%",
      toggleActions: "play none none none",
    },
  });
  const experienceTitleTextSplit = new SplitText(experienceTitleText.value, {
    type: "chars",
  });
  tlExperienceText
    .from(experienceTitleTextSplit.chars, {
      duration: 0.5,
      y: 50,
      autoAlpha: 0,
      stagger: 0.05,
      rotation: -15,
    })
    .from(
      experienceDescriptionText.value,
      {
        duration: 0.5,
        y: 50,
        autoAlpha: 0,
      },
      "-=0.3",
    )
    .from(".experienceLine", { duration: 1, drawSVG: 0 })
    .from(
      ".ball",
      {
        duration: 0.5,
        scale: 0,
        ease: "back.out(1.7)",
        transformOrigin: "center center",
      },
      "<",
    )
    .from(
      ".experience",
      {
        duration: 0.5,
        x: -100,
        autoAlpha: 0,
        stagger: 0.3,
      },
      "<0.3",
    )
    .add(() => {
      // Trigger ball scaling after line and balls animation completes
      gsap.utils.toArray(".ball").forEach((ball, index) => {
        gsap.to(ball as Element, {
          scale: 2,
          fill: "rgb(0, 135, 0)",
          transformOrigin: "center center",
          ease: "power2.inOut",
          duration: 0.3,
          scrollTrigger: {
            trigger: ball as Element,
            start: "top 75%",
            end: "top 25%",
            toggleActions: "play reverse play reverse",
            onEnter: () => {
              activeExperienceIndex.value = index;
            },
            onEnterBack: () => {
              activeExperienceIndex.value = index;
            },
          },
        });
      });
    });

  ScrollTrigger.create({
    trigger: ".experienceLine",
    start: "top 60%",
    end: "bottom 20%",
    onEnter: () => {
      showDescription.value = true;
    },
    onLeave: () => {
      showDescription.value = false;
    },
    onEnterBack: () => {
      showDescription.value = true;
    },
    onLeaveBack: () => {
      showDescription.value = false;
    },
  });

  // Refresh after everything is loaded
  nextTick(() => {
    ScrollTrigger.refresh();
  });
});
</script>
<template>
  <div class="container mx-auto h-530">
    <section class="px-4 py-32 pb-64 md:left-35 md:px-32 md:pt-72">
      <div
        ref="experienceTitleText"
        class="experienceTitleText text-lv-1 font-semibold"
      >
        <WaveText text="Experiences" attributeName="experienceTitleText" />
      </div>
      <p ref="experienceDescriptionText" class="mt-6 max-w-120 text-gray-600">
        Every effort, no matter how small, becomes a footnote in life—each
        moment connected, each step contributing to one shared and meaningful
        experience.
      </p>
    </section>
    <section class="relative">
      <svg viewBox="0 0 100 1300" class="absolute h-400 w-auto pl-2 md:pl-16">
        <line
          class="experienceLine"
          x1="40"
          y1="100"
          x2="40"
          y2="1000"
          stroke="grey"
          stroke-width="10"
        />

        <circle class="ball ball01" r="20" cx="40" cy="100"></circle>
        <circle class="ball ball02" r="20" cx="40" cy="400"></circle>
        <circle class="ball ball03" r="20" cx="40" cy="700"></circle>
        <circle class="ball ball04" r="20" cx="40" cy="1000"></circle>
      </svg>
      <div class="absolute top-11 left-28 flex flex-col gap-56 md:left-52">
        <div
          v-for="experience in experiences"
          :key="experience.id"
          class="experience h-36"
        >
          <div
            class="grid w-full max-w-lg grid-cols-8 gap-4 rounded-4xl border p-6"
          >
            <NuxtLink
              :to="experience.link"
              target="_blank"
              external
              class="col-span-2 flex items-center"
            >
              <NuxtImg
                :src="experience.image"
                :alt="`Experience ${experience.id}`"
                class="h-auto w-24 object-contain"
              />
            </NuxtLink>
            <div class="col-span-6 flex flex-col justify-center">
              <h3 class="text-xl font-semibold">{{ experience.company }}</h3>
              <div
                v-for="milestone in experience.milestones"
                :key="milestone.id"
                class="mt-2"
              >
                <p class="text-sm text-gray-600">{{ milestone.duration }}</p>
                <p class="text-gray-700">{{ milestone.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-show="showDescription"
        class="fixed top-32 left-300 z-50 hidden w-80 lg:block xl:right-16 xl:w-96"
      >
        <div class="rounded-2xl bg-white p-6 shadow-2xl">
          <Transition name="fade" mode="out-in">
            <div :key="activeExperienceIndex" class="space-y-4">
              <div class="flex items-center gap-4">
                <NuxtImg
                  :src="experiences[activeExperienceIndex].image"
                  :alt="experiences[activeExperienceIndex].company"
                  class="h-16 w-16 object-contain"
                />
                <div>
                  <h3 class="text-xl font-bold">
                    {{ experiences[activeExperienceIndex].company }}
                  </h3>
                  <p class="text-sm text-gray-600">
                    {{
                      experiences[activeExperienceIndex].milestones[0].duration
                    }}
                  </p>
                </div>
              </div>

              <div>
                <p class="text-sm font-semibold text-gray-700">
                  {{ experiences[activeExperienceIndex].milestones[0].title }}
                </p>
              </div>

              <p class="text-sm leading-relaxed text-gray-600">
                {{ experiences[activeExperienceIndex].Description }}
              </p>

              <div v-if="experiences[activeExperienceIndex].technologies">
                <p
                  class="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase"
                >
                  Technologies
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in experiences[activeExperienceIndex]
                      .technologies"
                    :key="tech"
                    class="rounded-full bg-slate-100 px-3 py-1 text-xs text-gray-700"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

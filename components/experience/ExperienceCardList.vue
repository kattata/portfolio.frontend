<script lang="ts" setup>
import { experiences } from '~~/content/ts/experiences';

const { formatMonthYear, formatYear } = useDateFormatter();

function constructMonthYearDuration(startDate: string, endDate: string | null) {
  const start = formatMonthYear(startDate);
  const end = endDate ? formatMonthYear(endDate) : 'now';

  return `${start} - ${end}`;
}

function constructYearDuration(startDate: string, endDate: string | null) {
  const start = formatYear(startDate);
  const end = endDate ? formatYear(endDate) : 'now';

  if (start === end) {
    return start;
  }

  return `${start} - ${end}`;
}
</script>

<template>
  <div class="experience-card-list">
    <div class="experience-card-list__list">
      <template v-for="item in experiences" :key="`experience-card__${item.role}-${item.company}`">
        <BaseExpandableCard>
          <template #collapsed>
            <div class="experience-card experience-card__collapsed">
              <div class="h3">
                {{ item.company }}
              </div>
              <div class="text-small">
                {{ constructYearDuration(item.startDate, item.endDate) }}
              </div>
            </div>
          </template>

          <template #expanded>
            <div class="experience-card experience-card__expanded">
              <div class="badge">
                {{ item.company }}
              </div>
              <div class="h3">
                {{ item.role }}
              </div>
              <div class="text-extra-small">
                {{ constructMonthYearDuration(item.startDate, item.endDate) }}
              </div>
              <ul>
                <template v-for="(highlight, index) in item.highlights" :key="`experience-highlight__${index}`">
                  <li>{{ highlight }}</li>
                </template>
              </ul>
            </div>
          </template>
        </BaseExpandableCard>
      </template>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.experience-card-list {
  &__list {
    display: flex;
    flex-direction: column @(min-width: 900px) row;
    gap: 12px;
    font-family: var(--font-family-base-secondary);
    padding-top: 12px;
  }
}

.experience-card {
  &__expanded {
    ul {
      font-size: var(--font-size-s);
      margin-top: 16px;
      padding-left: 16px;

      li {
        padding-bottom: 8px;
      }
    }
  }
}

.badge {
  background-color: var(--color-red-100);
  font-size: var(--font-size-xs);
  padding: 4px 8px;
  color: var(--color-secondary-100);
  width: fit-content;
  margin-bottom: 8px;
}
</style>

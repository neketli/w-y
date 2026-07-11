<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

const config = useWeddingConfig()

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(2, 'Укажите имя и фамилию'),
    status: z.enum(['yes', 'no', 'maybe'], {
      required_error: 'Выберите вариант ответа',
    }),
    allergies: z.string().optional(),
    drinks: z.string().optional(),
  }),
)

const { handleSubmit, resetForm } = useForm({ validationSchema })

const { value: name, errorMessage: nameError } = useField<string>('name')
const { value: status, errorMessage: statusError } = useField<'yes' | 'no' | 'maybe'>('status')
const { value: allergies } = useField<string>('allergies')
const { value: drinks } = useField<string>('drinks')

const submitted = ref(false)

const onSubmit = handleSubmit(async (values) => {
  const statusMap: Record<string, string> = { yes: 'Да', no: 'Нет', maybe: 'Пока не знаю' }
  try {
    await $fetch('https://n8n.neketli.ru/webhook/rsvp-form', {
      method: 'POST',
      body: {
        name: values.name,
        status: statusMap[values.status],
        allergies: values.allergies || '',
        drinks: values.drinks || '',
      },
    })
    submitted.value = true
    resetForm()
  }
  catch {
    alert('Ошибка отправки. Попробуйте позже.')
  }
})
</script>

<template>
  <section id="rsvp-section" class="section-container">
    <ScrollReveal>
      <SectionHeading label="RSVP" title="Подтверждение" />
    </ScrollReveal>

    <ScrollReveal :delay="100">
      <p class="text-body text-center max-w-2xl mx-auto mb-6">
        {{ config.rsvp.deadlineLabel }}
      </p>
    </ScrollReveal>

    <ScrollReveal :delay="200">
      <form class="space-y-6 max-w-xl mx-auto" @submit="onSubmit">
        <NFormGroup label="Имя и фамилия" required>
          <NInput v-model="name" input="solid" placeholder="Иван Иванов" />
          <p v-if="nameError" class="text-rose-clay text-xs mt-1">{{ nameError }}</p>
        </NFormGroup>

        <NFormGroup label="Сможете ли присутствовать?" required>
          <NRadioGroup v-model="status" class="flex gap-3">
            <NRadioGroupItem value="yes" label="Да" />
            <NRadioGroupItem value="no" label="Нет" />
            <NRadioGroupItem value="maybe" label="Пока не знаю" />
          </NRadioGroup>
          <p v-if="statusError" class="text-rose-clay text-xs mt-1">{{ statusError }}</p>
        </NFormGroup>

        <NFormGroup label="Есть ли у вас аллергия или непереносимость?">
          <NInput v-model="allergies"
                  input="solid"
                  type="textarea"
                  :rows="2"
                  placeholder="Напишите, если есть особенности питания"
          />
        </NFormGroup>

        <NFormGroup label="Ваши предпочтения по напиткам">
          <NInput v-model="drinks"
                  input="solid"
                  type="textarea"
                  :rows="2"
                  placeholder="Вино, шампанское, безалкогольное..."
          />
        </NFormGroup>

        <div class="pt-2">
          <NButton type="submit"
                   btn="solid"
                   block
                   size="lg"
          >
            <span class="flex items-center justify-center gap-2">
              <span class="icon-[ph--paper-plane-right-fill] text-base" />
              Отправить ответ
            </span>
          </NButton>
        </div>

        <div v-if="submitted" class="p-4 bg-olive-light/10 border border-olive-light/20 rounded-xl text-center">
          <p class="font-sans text-sm text-olive-dark font-medium">
            Спасибо! Ваш ответ принят.
          </p>
          <p class="font-sans text-xs text-stone-400 mt-1">
            Мы свяжемся с вами при необходимости.
          </p>
        </div>
      </form>
    </ScrollReveal>
  </section>
</template>

<style scoped>
:deep(.input-wrapper) {
  background-color: #FAF6EE !important;
  border-color: #F5EDDB !important;
  border-radius: 0.75rem !important;
}
:deep(.input-wrapper:focus-within) {
  background-color: #FDFBF7 !important;
  border-color: #E5C8BF !important;
}
:deep(.input-wrapper textarea) {
  min-height: 5em !important;
}
:deep(.btn-solid) {
  background-color: #B4867A !important;
  color: white !important;
}
:deep(.btn-solid:hover) {
  background-color: #9D6B5F !important;
}
:deep(.radio-group-item) {
  border-color: #E5C8BF !important;
}
:deep(.radio-group-item[data-state="checked"]) {
  border-color: #B4867A !important;
}
:deep(.radio-group-indicator-icon-base) {
  fill: #B4867A !important;
}
</style>

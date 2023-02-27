<template>
  <q-page class="flex flex-center bg-black">
    <q-card class="my-card bg-grey-2 text-white">
      <q-card-section class="flex flex-center">
        <div class="text-h6 text-black">Faça seu login</div>
      </q-card-section>

      <q-card-section class="q-gutter-lg">
        <q-input v-model="login" type="email" label="Usuário" color="black" outlined/>
        <q-input v-model="password" :type="isPwd ? 'password' : 'text'" label="Senha" color="black" outlined>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </q-card-section>

      <q-separator dark />

      <q-card-actions class="flex flex-center">
        <q-btn color="primary" push no-caps icon="login" class="q-ma-md" @click="goToIndexPage()">Acessar</q-btn>
        <q-btn color="red" push no-caps icon="clear" class="q-ma-md" @click="onClearFields()">Limpar</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>

export default ({
  name: 'LoginPage',
  data() {
    return {
      password: null,
      login: null,
      isPwd: true
    }
  },

  methods: {
    onClearFields() {
      this.password = ''
      this.email= ''
    },

    goToIndexPage() {
      if (this.login === 'admin' && this.password === '123') {
        this.$router.push({name: 'index'})
      } else {
        alert("Usuário e senha incorreto, verifique e tente novamente")
      }
    }

  }
})
</script>

<template>
  <div>
    <q-page>
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">{{ agency.name }}</div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              {{ agency.titleSmartTour }}
            </div>
            <div class="text-h7 q-mt-sm q-mb-xs">Info</div>
            <div class="text-caption text-grey">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
              <br />
              <br />
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and
              Evil) by Cicero, written in 45 BC. This book is a treatise on the
              theory of ethics, very popular during the Renaissance. The first
              line of Lorem Ipsum, Lorem ipsum dolor sit amet...
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              src="https://images.pexels.com/photos/1310110/pexels-photo-1310110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </q-card-section>
        </q-card-section>
        <div v-for="user in agency.users" :key="user.id">
          <q-separator />
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                {{ user.firstName }} {{ user.lastName }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-card>
    </q-page>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "AgencyPage",
  created: function() {
    this.$store.dispatch("layoutState/updateType", "default");
    this.$store.dispatch("userState/fetchAgency");
  },

  computed: {
    ...mapState("userState", ["user", "agency"])
  }
};
</script>

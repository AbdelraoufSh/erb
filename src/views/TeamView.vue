<template>
<div>
    <v-row >
        <v-col class="pl-9 first--text pt-4 pb-6" cols="3">
          <p class="text-h6 font-weight-light">Team</p>
        </v-col>
      </v-row>
    <v-row class="px-16">
        <v-col cols="3" class="" v-for="(team,i) in $store.state.team" :key="i">
            <v-card class="d-flex flex-column align-center pt-8 pb-3">
                <v-avatar width="100px" height="100px" >
                    <v-img :src="$store.state.images[1]">
                    </v-img>
                </v-avatar>
                <v-card-title>
                    {{ team.name }}
                </v-card-title>
                <v-card-subtitle>
                    {{ team.job }}
                </v-card-subtitle>
                <v-card-actions class=" first--text">
                    <v-btn class="transparent" outlined>
                        <v-icon>mdi-message</v-icon>
                        <p class="ma-0 font-weight-medium mb-1">MESSAGE</p>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</div>

</template>
<template>
    <v-container class="py-10">
        <v-row class="mb-8">
            <v-col cols="12" md="6">
                <h1 class="text-h3 text-primary">{{ t.partnershipOpportunities }}</h1>
            </v-col>
        </v-row>
    </v-container>

    <div class="bg-grey-lighten-4">
        <v-container class="py-16">
            <v-row>
                <v-col cols="12" class="mb-6">
                    <p class="text-h5 text-justify mb-6">{{ t.partnershipOpportunitiesP1 }}</p>
                    <p class="text-body-1 text-justify">{{ t.partnershipOpportunitiesP2 }}</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <v-container>
        <!-- Business Partners -->
        <v-row class="py-16" align="center">
            <v-col cols="12" md="6" class="mb-6 mb-md-0">
                <h2 class="text-h4 text-primary mb-4">{{ t.forBusinessPartners }}</h2>
                <p class="text-body-1 text-justify">{{ t.partnerP1 }}</p>
            </v-col>
            <v-col cols="12" md="6" v-if="!isMobileView">
                <v-img src="/images/1732160491688.webp" height="300" cover class="rounded-lg" />
            </v-col>
        </v-row>
    </v-container>

    <v-img data-aos="flip-up" v-if="isMobileView" src="/images/1732160491688.webp" height="400" cover />

    <v-container>
        <!-- Government Collaboration -->
        <v-row class="py-16" align="center">
            <v-col cols="12" md="6" order-md="2" class="mb-6 mb-md-0">
                <h2 class="text-h4 text-primary mb-4">{{ t.governmentCollab }}</h2>
                <p class="text-body-1 text-justify">{{ t.governmentCollabP1 }}</p>
            </v-col>
            <v-col cols="12" md="6" order-md="1">
                <v-img v-if="!isMobileView" src="/images/1732160494493.webp" height="300" cover class="rounded-lg" />
            </v-col>
        </v-row>
    </v-container>
    <v-img data-aos="flip-up" v-if="isMobileView" src="/images/1732160494493.webp" height="400" cover />
    <v-container>
        <!-- CSR -->
        <v-row class="py-16" align="center">
            <v-col cols="12" md="6" class="mb-6 mb-md-0">
                <h2 class="text-h4 text-primary mb-4">{{ t.corporateSocial }}</h2>
                <p class="text-body-1 text-justify">{{ t.corporateSocialP1 }}</p>
            </v-col>
            <v-col cols="12" md="6">
                <v-img v-if="!isMobileView" src="/images/1732160497759.webp" height="300" cover class="rounded-lg" />
            </v-col>
        </v-row>
    </v-container>
    <v-img data-aos="flip-up" v-if="isMobileView" src="/images/1732160497759.webp" height="400" cover />
    <!-- Parallax Section -->
    <v-img src="/images/1732160495699.webp" height="600" gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)"
        cover>
        <v-container class="fill-height d-flex align-center justify-center text-white">
            <v-row>
                <v-col cols="12" md="10" class="mx-auto">
                    <h2 class="text-h4 mb-4">{{ t.partnerBenefitTitle }}</h2>
                    <v-container class="pl-md-10 text-body-1">
                        <ul>
                            <li>{{ t.partnerBenefitP1 }}</li>
                            <li>{{ t.partnerBenefitP2 }}</li>
                            <li>{{ t.partnerBenefitP3 }}</li>
                        </ul>
                    </v-container>
                    <p class="text-body-1">{{ t.partnerBenefitSummary }}</p>
                </v-col>
            </v-row>
        </v-container>
    </v-img>
</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '~/stores/languageStore';
export default {
    name: 'HomeView',
    data() {

        return {
            isMobileView: false,
        };
    },
    computed: {
        ...mapState(useLanguageStore, ['t']),
    },
    mounted() {
        this.checkMobileView(); // check on initial load
        window.addEventListener('resize', this.checkMobileView); // attach resize listener
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobileView); // clean up
    },
    methods: {
        checkMobileView() {
            this.isMobileView = this.$vuetify.display.mobile;
        },
    },
};
</script>
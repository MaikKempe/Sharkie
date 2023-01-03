
/**
 * ##############################################################
 * ##################### Background #############################
 * ##############################################################
 */

const BACKGROUND_IMAGES = [
    'img/3_background/layers/5_water/D.png', //water img long
    'img/3_background/layers/4_fondo2/D.png', // seabed bg element
    'img/3_background/layers/3_fondo1/D.png', // seabed bg element
    'img/3_background/layers/2_floor/D.png', // seabed
    'img/3_background/layers/1_light/D.png' // light effect
];

/**
 * ##############################################################
 * ################## Character Sharkie #########################
 * ##############################################################
 */

const CHARACTER_IMAGES_IDLE = [
    'img/1_sharkie/1_IDLE/1.png',
    'img/1_sharkie/1_IDLE/2.png',
    'img/1_sharkie/1_IDLE/3.png',
    'img/1_sharkie/1_IDLE/4.png',
    'img/1_sharkie/1_IDLE/5.png',
    'img/1_sharkie/1_IDLE/6.png',
    'img/1_sharkie/1_IDLE/7.png',
    'img/1_sharkie/1_IDLE/8.png',
    'img/1_sharkie/1_IDLE/9.png',
    'img/1_sharkie/1_IDLE/10.png',
    'img/1_sharkie/1_IDLE/11.png',
    'img/1_sharkie/1_IDLE/12.png',
    'img/1_sharkie/1_IDLE/13.png',
    'img/1_sharkie/1_IDLE/14.png',
    'img/1_sharkie/1_IDLE/15.png',
    'img/1_sharkie/1_IDLE/16.png',
    'img/1_sharkie/1_IDLE/17.png',
    'img/1_sharkie/1_IDLE/18.png'
];

const CHARACTER_IMAGES_SLEEPING = [
    'img/1_sharkie/2_long_IDLE/1.png',
    'img/1_sharkie/2_long_IDLE/2.png',
    'img/1_sharkie/2_long_IDLE/3.png',
    'img/1_sharkie/2_long_IDLE/4.png',
    'img/1_sharkie/2_long_IDLE/5.png',
    'img/1_sharkie/2_long_IDLE/6.png',
    'img/1_sharkie/2_long_IDLE/7.png',
    'img/1_sharkie/2_long_IDLE/8.png',
    'img/1_sharkie/2_long_IDLE/9.png',
    'img/1_sharkie/2_long_IDLE/11.png',
    'img/1_sharkie/2_long_IDLE/12.png',
    'img/1_sharkie/2_long_IDLE/13.png',
    'img/1_sharkie/2_long_IDLE/14.png'
];

const CHARACTER_IMAGES_SWIMMING = [
    'img/1_sharkie/3_swim/1.png',
    'img/1_sharkie/3_swim/2.png',
    'img/1_sharkie/3_swim/3.png',
    'img/1_sharkie/3_swim/4.png',
    'img/1_sharkie/3_swim/5.png',
    'img/1_sharkie/3_swim/6.png'
];

const CHARACTER_IMAGES_SLAP_ATTACK = [
    'img/1_sharkie/4_attack/fin_slap/1.png',
    'img/1_sharkie/4_attack/fin_slap/2.png',
    'img/1_sharkie/4_attack/fin_slap/3.png',
    'img/1_sharkie/4_attack/fin_slap/4.png',
    'img/1_sharkie/4_attack/fin_slap/5.png',
    'img/1_sharkie/4_attack/fin_slap/6.png',
    'img/1_sharkie/4_attack/fin_slap/7.png',
    'img/1_sharkie/4_attack/fin_slap/8.png'
];

const CHARACTER_IMAGES_BUBBLE_ATTACK = [
    'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/1.png',
    'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/2.png',
    'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/3.png',
    'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/4.png',
    'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/5.png',
    'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/6.png',
    'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/7.png',
    'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/8.png'
];

const CHARACTER_IMAGES_POISONED_BUBBLE_ATTACK = [
    'img/1_sharkie/4_attack/bubble_trap/for_whale/1.png',
    'img/1_sharkie/4_attack/bubble_trap/for_whale/2.png',
    'img/1_sharkie/4_attack/bubble_trap/for_whale/3.png',
    'img/1_sharkie/4_attack/bubble_trap/for_whale/4.png',
    'img/1_sharkie/4_attack/bubble_trap/for_whale/5.png',
    'img/1_sharkie/4_attack/bubble_trap/for_whale/6.png',
    'img/1_sharkie/4_attack/bubble_trap/for_whale/7.png',
    'img/1_sharkie/4_attack/bubble_trap/for_whale/8.png'
];

const CHARACTER_IMAGES_HURT = [
    'img/1_sharkie/5_hurt/1_poisoned/1.png',
    'img/1_sharkie/5_hurt/1_poisoned/2.png',
    'img/1_sharkie/5_hurt/1_poisoned/3.png',
    'img/1_sharkie/5_hurt/1_poisoned/4.png',
];

const CHARACTER_IMAGES_DEAD = [
    'img/1_sharkie/6_dead/1_poisoned/1.png',
    'img/1_sharkie/6_dead/1_poisoned/2.png',
    'img/1_sharkie/6_dead/1_poisoned/3.png',
    'img/1_sharkie/6_dead/1_poisoned/4.png',
    'img/1_sharkie/6_dead/1_poisoned/5.png',
    'img/1_sharkie/6_dead/1_poisoned/6.png',
    'img/1_sharkie/6_dead/1_poisoned/7.png',
    'img/1_sharkie/6_dead/1_poisoned/8.png',
    'img/1_sharkie/6_dead/1_poisoned/9.png',
    'img/1_sharkie/6_dead/1_poisoned/10.png',
    'img/1_sharkie/6_dead/1_poisoned/11.png',
    'img/1_sharkie/6_dead/1_poisoned/12.png'
];

/**
 * ##############################################################
 * ############ Statusbars Character and Endboss ################
 * ##############################################################
 */

const STATUSBAR_LIFE_IMAGES = [
    'img/4_marcadores/green/life/0_copia3.png',
    'img/4_marcadores/green/life/20_copia4.png',
    'img/4_marcadores/green/life/40_copia3.png',
    'img/4_marcadores/green/life/60_copia3.png',
    'img/4_marcadores/green/life/80_copia3.png',
    'img/4_marcadores/green/life/100_copia2.png'
];

const STATUSBAR_COINS_IMAGES = [
    'img/4_marcadores/green/coin/0_copia4.png',
    'img/4_marcadores/green/coin/20_copia2.png',
    'img/4_marcadores/green/coin/40_copia4.png',
    'img/4_marcadores/green/coin/60_copia4.png',
    'img/4_marcadores/green/coin/80_copia4.png',
    'img/4_marcadores/green/coin/100_copia4.png'
];

const STATUSBAR_POISON_IMAGES = [
    'img/4_marcadores/green/poisoned_bubbles/0_copia2.png',
    'img/4_marcadores/green/poisoned_bubbles/20_copia3.png',
    'img/4_marcadores/green/poisoned_bubbles/40_copia2.png',
    'img/4_marcadores/green/poisoned_bubbles/60_copia2.png',
    'img/4_marcadores/green/poisoned_bubbles/80_copia2.png',
    'img/4_marcadores/green/poisoned_bubbles/100_copia3.png'
];

const STATUSBAR_ENDBOSS_IMAGES = [
    'img/4_marcadores/orange/0_copia1.png',
    'img/4_marcadores/orange/20_copia1.png',
    'img/4_marcadores/orange/40_copia1.png',
    'img/4_marcadores/orange/60_copia1.png',
    'img/4_marcadores/orange/80_copia1.png',
    'img/4_marcadores/orange/100_copia1.png',
];

/**
 * ##############################################################
 * ################## enemy: Pufferfishes #######################
 * ##############################################################
 */


const PUFFERFISH_NORMAL_IMAGES_SWIM = [
    'img/2_enemy/1_pufferfish/1_swim/1.swim1.png',
    'img/2_enemy/1_pufferfish/1_swim/1.swim2.png',
    'img/2_enemy/1_pufferfish/1_swim/1.swim3.png',
    'img/2_enemy/1_pufferfish/1_swim/1.swim4.png',
    'img/2_enemy/1_pufferfish/1_swim/1.swim5.png',
];

const PUFFERFISH_NORMAL_IMAGES_IMAGES_DEAD = [
    'img/2_enemy/1_pufferfish/4_DIE/1.1.png',
    'img/2_enemy/1_pufferfish/4_DIE/1.2.png',
    'img/2_enemy/1_pufferfish/4_DIE/1.3.png',
];

const PUFFERFISH_NORMAL_IMAGES_IMAGES_HURT = [
    'img/2_enemy/1_pufferfish/2_transition/3.transition1.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition2.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition3.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition4.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition5.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim1.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim2.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim3.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim4.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim5.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition5.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition4.png',
    'img/2_enemy/1_pufferfish/2_transition/1.transition3.png',
    'img/2_enemy/1_pufferfish/2_transition/1.transition2.png',
    'img/2_enemy/1_pufferfish/2_transition/1.transition1.png',
];


const PUFFERFISH_HARD_IMAGES_SWIM = [
    'img/2_enemy/1_pufferfish/1_swim/2.swim1.png',
    'img/2_enemy/1_pufferfish/1_swim/2.swim2.png',
    'img/2_enemy/1_pufferfish/1_swim/2.swim3.png',
    'img/2_enemy/1_pufferfish/1_swim/2.swim4.png',
    'img/2_enemy/1_pufferfish/1_swim/2.swim5.png'
];

const PUFFERFISH_HARD_IMAGES_ANGRY = [
    'img/2_enemy/1_pufferfish/2_transition/3.transition1.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition2.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition3.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition4.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition5.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim1.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim2.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim3.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim4.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim5.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim1.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim2.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim3.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim4.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim5.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim1.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim2.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim3.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim4.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim5.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim1.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim2.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim3.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim4.png',
    'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim5.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition5.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition4.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition3.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition2.png',
    'img/2_enemy/1_pufferfish/2_transition/3.transition1.png',
];

const PUFFERFISH_HARD_IMAGES_DEAD_ANGRY = [
    'img/2_enemy/1_pufferfish/4_DIE/3.1.png',
    'img/2_enemy/1_pufferfish/4_DIE/3.2.png',
    'img/2_enemy/1_pufferfish/4_DIE/3.3.png'
];

const PUFFERFISH_HARD_IMAGES_DEAD = [
    'img/2_enemy/1_pufferfish/4_DIE/2.1.png',
    'img/2_enemy/1_pufferfish/4_DIE/2.2.png',
    'img/2_enemy/1_pufferfish/4_DIE/2.3.png'
];


/**
 * ##############################################################
 * ###################### enemy: enboss #########################
 * ##############################################################
 */


const ENDBOSS_IMAGES_INTRODUCE = [
    'img/2_enemy/3_final_enemy/1_introduce/1.png',
    'img/2_enemy/3_final_enemy/1_introduce/2.png',
    'img/2_enemy/3_final_enemy/1_introduce/3.png',
    'img/2_enemy/3_final_enemy/1_introduce/4.png',
    'img/2_enemy/3_final_enemy/1_introduce/5.png',
    'img/2_enemy/3_final_enemy/1_introduce/6.png',
    'img/2_enemy/3_final_enemy/1_introduce/7.png',
    'img/2_enemy/3_final_enemy/1_introduce/8.png',
    'img/2_enemy/3_final_enemy/1_introduce/9.png',
    'img/2_enemy/3_final_enemy/1_introduce/10.png'
];

 const ENDBOSS_IMAGES_SWIM = [
    'img/2_enemy/3_final_enemy/2_floating/1.png',
    'img/2_enemy/3_final_enemy/2_floating/2.png',
    'img/2_enemy/3_final_enemy/2_floating/3.png',
    'img/2_enemy/3_final_enemy/2_floating/4.png',
    'img/2_enemy/3_final_enemy/2_floating/5.png',
    'img/2_enemy/3_final_enemy/2_floating/6.png',
    'img/2_enemy/3_final_enemy/2_floating/7.png',
    'img/2_enemy/3_final_enemy/2_floating/8.png',
    'img/2_enemy/3_final_enemy/2_floating/9.png',
    'img/2_enemy/3_final_enemy/2_floating/10.png',
    'img/2_enemy/3_final_enemy/2_floating/11.png'
];

 const ENDBOSS_IMAGES_HURT = [
    'img/2_enemy/3_final_enemy/hurt/1.png',
    'img/2_enemy/3_final_enemy/hurt/2.png',
    'img/2_enemy/3_final_enemy/hurt/3.png',
    'img/2_enemy/3_final_enemy/hurt/4.png'
];

 const ENDBOSS_IMAGES_ATTACK = [
    'img/2_enemy/3_final_enemy/attack/1.png',
    'img/2_enemy/3_final_enemy/attack/2.png',
    'img/2_enemy/3_final_enemy/attack/3.png',
    'img/2_enemy/3_final_enemy/attack/4.png',
    'img/2_enemy/3_final_enemy/attack/5.png',
    'img/2_enemy/3_final_enemy/attack/6.png'
];

 const ENDBOSS_IMAGES_DEAD = [
    'img/2_enemy/3_final_enemy/dead/1.png',
    'img/2_enemy/3_final_enemy/dead/2.png',
    'img/2_enemy/3_final_enemy/dead/1.png',
    'img/2_enemy/3_final_enemy/dead/2.png',
    'img/2_enemy/3_final_enemy/dead/1.png',
    'img/2_enemy/3_final_enemy/dead/2.png',
    'img/2_enemy/3_final_enemy/dead/1.png',
    'img/2_enemy/3_final_enemy/dead/2.png',
    'img/2_enemy/3_final_enemy/dead/3.png',
    'img/2_enemy/3_final_enemy/dead/4.png',
    'img/2_enemy/3_final_enemy/dead/5.png'
];

/**
 * ##############################################################
 * ################## collectible objects #######################
 * ##############################################################
 */

const COIN_IMAGE = ['img/4_marcadores/1_coins/1.png'];

const POISON_IMAGES = [
    'img/4_marcadores/poison/animada/1.png',
    'img/4_marcadores/poison/animada/2.png',
    'img/4_marcadores/poison/animada/3.png',
    'img/4_marcadores/poison/animada/4.png',
    'img/4_marcadores/poison/animada/5.png',
    'img/4_marcadores/poison/animada/6.png',
    'img/4_marcadores/poison/animada/7.png',
    'img/4_marcadores/poison/animada/8.png'
];

/**
 * ##############################################################
 * ############### other moveable objects #######################
 * ##############################################################
 */

const BUBBLE_IMAGE = ['img/1_sharkie/4_attack/bubble_trap/bubble.png'];

const POISONED_BUBBLE_IMAGE = ['img/1_sharkie/4_attack/bubble_trap/poisoned_bubble_for_whale.png'];

/**
 * ##############################################################
 * ############# All images array for preload ###################
 * ##############################################################
 */

const allImages = [
    BACKGROUND_IMAGES,
    CHARACTER_IMAGES_IDLE,
    CHARACTER_IMAGES_SLEEPING,
    CHARACTER_IMAGES_SWIMMING,
    CHARACTER_IMAGES_SLAP_ATTACK,
    CHARACTER_IMAGES_BUBBLE_ATTACK,
    CHARACTER_IMAGES_POISONED_BUBBLE_ATTACK,
    CHARACTER_IMAGES_HURT,
    CHARACTER_IMAGES_DEAD,
    STATUSBAR_LIFE_IMAGES,
    STATUSBAR_COINS_IMAGES,
    STATUSBAR_POISON_IMAGES,
    STATUSBAR_ENDBOSS_IMAGES,
    PUFFERFISH_NORMAL_IMAGES_SWIM,
    PUFFERFISH_NORMAL_IMAGES_IMAGES_DEAD,
    PUFFERFISH_NORMAL_IMAGES_IMAGES_HURT,
    PUFFERFISH_HARD_IMAGES_SWIM,
    PUFFERFISH_HARD_IMAGES_ANGRY,
    PUFFERFISH_HARD_IMAGES_DEAD_ANGRY,
    PUFFERFISH_HARD_IMAGES_DEAD,
    ENDBOSS_IMAGES_INTRODUCE,
    ENDBOSS_IMAGES_SWIM,
    ENDBOSS_IMAGES_HURT,
    ENDBOSS_IMAGES_ATTACK,
    ENDBOSS_IMAGES_DEAD,
    COIN_IMAGE,
    POISON_IMAGES,
    BUBBLE_IMAGE,
    POISONED_BUBBLE_IMAGE
];
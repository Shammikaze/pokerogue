import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
    "cancel": "Cancelar",
    "continue": "Continuar",
    "dailyRun": "Reto diario (Beta)",
    "loadGame": "Cargar partida",
    "newGame": "Nueva partida",
    "selectGameMode": "Elige un modo de juego.",
    "logInOrCreateAccount": "Inicia sesión o crea una cuenta para empezar. ¡No se requiere correo electrónico!",
    "failedToLoadSaveData": "No se ha podido cargar los datos guardados. Por favor, recarga la página.\nSi el fallo continúa, por favor contacta al administrador.",
    "sessionSuccess": "Sesión cargada con éxito.",
    "failedToLoadSession": "No se ha podido cargar los datos de tu sesión.\nPuede que estén corruptos.",
    "boyOrGirl": "¿Eres un chico o una chica?",
    "boy": "Chico",
    "girl": "Chica",
    "bossAppeared": "¡{{bossName}} te corta el paso!",
    "trainerAppeared": "¡{{trainerName}}\n te desafía!",
    "singleWildAppeared": "¡Un {{pokemonName}} salvaje te corta el paso!",
    "multiWildAppeared": "¡Un {{pokemonName1}} y un {{pokemonName2}} salvajes\nte cortan el paso!",
    "playerComeBack": "¡{{pokemonName}}, ven aquí!",
    "trainerComeBack": "¡{{trainerName}} retira a {{pokemonName}} del combate!",
    "playerGo": "¡Adelante, {{pokemonName}}!",
    "trainerGo": "¡{{trainerName}} saca a {{pokemonName}}!",
    "switchQuestion": "¿Quieres cambiar a\n{{pokemonName}}?",
    "pokemon": "Pokémon",
    "sendOutPokemon": "¡Adelante, {{pokemonName}}!",
    "levelCapUp": "¡Se ha incrementado el\nnivel máximo a {{levelCap}}!",
    "moveNotImplemented": "{{moveName}} aún no está implementado y no se puede seleccionar.",
    "moveDisabled": "!No puede usar {{moveName}} porque ha sido anulado!",
    "noPokeballForce": "Una fuerza misteriosa\nte impide usar Poké Balls.",
    "noPokeballTrainer": "¡No puedes atrapar a los\nPokémon de los demás!",
    "noPokeballMulti": "¡No se pueden lanzar Poké Balls\ncuando hay más de un Pokémon!",
    "noPokeballStrong": "¡Este Pokémon es demasiado fuerte para ser capturado!\nNecesitas bajarle los PS primero!",
    "noEscapeForce": "Una fuerza misteriosa\nte impide huir.",
    "noEscapeTrainer": "¡No puedes huir de los\ncombates contra Entrenadores!",
    "noEscapePokemon": "¡El movimiento {{moveName}} de {{pokemonName}} impide la huida!",
    "escapeVerbSwitch": "cambiar",
    "escapeVerbFlee": "huir",
    "notDisabled": "¡El movimiento {{moveName}}\n ya no está anulado!",
} as const;
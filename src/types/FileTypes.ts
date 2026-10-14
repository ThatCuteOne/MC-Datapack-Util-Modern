/* eslint-disable @typescript-eslint/naming-convention */
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019-2020 SPGoding
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import * as path from 'path';
import {minimatch} from 'minimatch';

export const tagFileTypes = [
    'tag/banner_pattern',
    'tag/block',
    'tag/block_sound_set',
    'tag/cat_variant',
    'tag/damage_type',
    'tag/dialog',
    'tag/enchantment',
    'tag/entity_type',
    'tag/fluid',
    'tag/function',
    'tag/game_event',
    'tag/instrument',
    'tag/item',
    'tag/item_modifier',
    'tag/loot_table',
    'tag/number_provider',
    'tag/painting_variant',
    'tag/point_of_interest_type',
    'tag/potion',
    'tag/predicate',
    'tag/recipe',
    'tag/slot_source',
    'tag/timeline',
    'tag/villager_trade',
    'tag/worldgen/biome',
    'tag/worldgen/configured_carver',
    'tag/worldgen/configured_decorator',
    'tag/worldgen/configured_feature',
    'tag/worldgen/configured_structure_feature',
    'tag/worldgen/configured_surface_builder',
    'tag/worldgen/density_function',
    'tag/worldgen/feature',
    'tag/worldgen/flat_level_generator_preset',
    'tag/worldgen/noise',
    'tag/worldgen/noise_settings',
    'tag/worldgen/placed_feature',
    'tag/worldgen/processor_list',
    'tag/worldgen/structure',
    'tag/worldgen/structure_set',
    'tag/worldgen/template_pool',
    'tag/worldgen/world_preset'
] as const;

export type FileType =
    | 'advancement'
    | 'dimension'
    | 'dimension_type'
    | 'function'
    | 'item_modifier'
    | 'loot_table'
    | 'predicate'
    | 'recipe'
    | 'structure'
    | 'zombie_nautilus_variant'
    | 'world_clock'
    | 'wolf_variant'
    | 'villager_trade'
    | 'trim_pattern'
    | 'trim_material'
    | 'trial_spawner'
    | 'trade_set'
    | 'timeline'
    | 'test_instance'
    | 'test_environment'
    | 'sulfur_cube_archetype'
    | 'pig_variant'
    | 'pig_sound_variant'
    | 'painting_variant'
    | 'jukebox_song'
    | 'instrument'
    | 'frog_variant'
    | 'enchantment_provider'
    | 'enchantment'
    | 'dialog'
    | 'decorated_pot_pattern'
    | 'damage_type'
    | 'cow_variant'
    | 'cow_sound_variant'
    | 'context_int_provider'
    | 'context_float_provider'
    | 'chicken_variant'
    | 'chicken_sound_variant'
    | 'chat_type'
    | 'cat_variant'
    | 'cat_sound_variant'
    | 'block_transformer'
    | 'banner_pattern'
    | 'tag/banner_pattern'
    | 'tag/block'
    | 'tag/block_sound_set'
    | 'tag/cat_variant'
    | 'tag/damage_type'
    | 'tag/dialog'
    | 'tag/enchantment'
    | 'tag/entity_type'
    | 'tag/fluid'
    | 'tag/function'
    | 'tag/game_event'
    | 'tag/instrument'
    | 'tag/item'
    | 'tag/item_modifier'
    | 'tag/loot_table'
    | 'tag/number_provider'
    | 'tag/painting_variant'
    | 'tag/point_of_interest_type'
    | 'tag/potion'
    | 'tag/predicate'
    | 'tag/recipe'
    | 'tag/slot_source'
    | 'tag/timeline'
    | 'tag/villager_trade'
    | 'tag/worldgen/biome'
    | 'tag/worldgen/configured_carver'
    | 'tag/worldgen/configured_decorator'
    | 'tag/worldgen/configured_feature'
    | 'tag/worldgen/configured_structure_feature'
    | 'tag/worldgen/configured_surface_builder'
    | 'tag/worldgen/density_function'
    | 'tag/worldgen/feature'
    | 'tag/worldgen/flat_level_generator_preset'
    | 'tag/worldgen/noise'
    | 'tag/worldgen/noise_settings'
    | 'tag/worldgen/placed_feature'
    | 'tag/worldgen/processor_list'
    | 'tag/worldgen/structure'
    | 'tag/worldgen/structure_set'
    | 'tag/worldgen/template_pool'
    | 'tag/worldgen/world_preset'
    | 'worldgen/biome'
    | 'worldgen/configured_carver'
    | 'worldgen/configured_decorator'
    | 'worldgen/configured_feature'
    | 'worldgen/configured_structure_feature'
    | 'worldgen/configured_surface_builder'
    | 'worldgen/density_function'
    | 'worldgen/noise'
    | 'worldgen/noise_settings'
    | 'worldgen/placed_feature'
    | 'worldgen/processor_list'
    | 'worldgen/structure_set'
    | 'worldgen/template_pool';


export const fileTypeFolderName: { [key in FileType]: string } = {
    // common
    advancement: 'advancement',
    dimension: 'dimension',
    dimension_type: 'dimension_type',
    function: 'function',
    item_modifier: 'item_modifier',
    loot_table: 'loot_table',
    predicate: 'predicate',
    recipe: 'recipe',
    structure: 'structure',
    zombie_nautilus_variant: 'zombie_nautilus_variant',
    world_clock: 'world_clock',
    wolf_variant: 'wolf_variant',
    villager_trade: 'villager_trade',
    trim_pattern: 'trim_pattern',
    trim_material: 'trim_material',
    trial_spawner: 'trial_spawner',
    trade_set: 'trade_set',
    timeline: 'timeline',
    test_instance: 'test_instance',
    test_environment: 'test_environment',
    sulfur_cube_archetype: 'sulfur_cube_archetype',
    pig_variant: 'pig_variant',
    pig_sound_variant: 'pig_sound_variant',
    painting_variant: 'painting_variant',
    jukebox_song: 'jukebox_song',
    instrument: 'instrument',
    frog_variant: 'frog_variant',
    enchantment_provider: 'enchantment_provider',
    enchantment: 'enchantment',
    dialog: 'dialog',
    decorated_pot_pattern: 'decorated_pot_pattern',
    damage_type: 'damage_type',
    cow_variant: 'cow_variant',
    cow_sound_variant: 'cow_sound_variant',
    context_int_provider: 'context_int_provider',
    context_float_provider: 'context_float_provider',
    chicken_variant: 'chicken_variant',
    chicken_sound_variant: 'chicken_sound_variant',
    chat_type: 'chat_type',
    cat_variant: 'cat_variant',
    cat_sound_variant: 'cat_sound_variant',
    banner_pattern: 'banner_pattern',
    block_transformer: 'block_transformer',
    // tag
    'tag/banner_pattern': 'tags/banner_pattern',
    'tag/block': 'tags/block',
    'tag/block_sound_set': 'tags/block_sound_set',
    'tag/cat_variant': 'tags/cat_variant',
    'tag/damage_type': 'tags/damage_type',
    'tag/dialog': 'tags/dialog',
    'tag/enchantment': 'tags/enchantment',
    'tag/entity_type': 'tags/entity_type',
    'tag/fluid': 'tags/fluid',
    'tag/function': 'tags/function',
    'tag/game_event': 'tags/game_event',
    'tag/instrument': 'tags/instrument',
    'tag/item': 'tags/item',
    'tag/item_modifier': 'tags/item_modifier',
    'tag/loot_table': 'tags/loot_table',
    'tag/number_provider': 'tags/number_provider',
    'tag/painting_variant': 'tags/painting_variant',
    'tag/point_of_interest_type': 'tags/point_of_interest_type',
    'tag/potion': 'tags/potion',
    'tag/predicate': 'tags/predicate',
    'tag/recipe': 'tags/recipe',
    'tag/slot_source': 'tags/slot_source',
    'tag/timeline': 'tags/timeline',
    'tag/villager_trade': 'tags/villager_trade',
    // tag/worldgen
    'tag/worldgen/biome': 'tags/worldgen/biome',
    'tag/worldgen/configured_carver': 'tags/worldgen/configured_carver',
    'tag/worldgen/configured_decorator': 'tags/worldgen/configured_decorator',
    'tag/worldgen/configured_feature': 'tags/worldgen/configured_feature',
    'tag/worldgen/configured_structure_feature': 'tags/worldgen/configured_structure_feature',
    'tag/worldgen/configured_surface_builder': 'tags/worldgen/configured_surface_builder',
    'tag/worldgen/density_function': 'tags/worldgen/density_function',
    'tag/worldgen/feature': 'tags/worldgen/feature',
    'tag/worldgen/flat_level_generator_preset': 'tags/worldgen/flat_level_generator_preset',
    'tag/worldgen/noise': 'tags/worldgen/noise',
    'tag/worldgen/noise_settings': 'tags/worldgen/noise_settings',
    'tag/worldgen/placed_feature': 'tags/worldgen/placed_feature',
    'tag/worldgen/processor_list': 'tags/worldgen/processor_list',
    'tag/worldgen/structure': 'tags/worldgen/structure',
    'tag/worldgen/structure_set': 'tags/worldgen/structure_set',
    'tag/worldgen/template_pool': 'tags/worldgen/template_pool',
    'tag/worldgen/world_preset': 'tags/worldgen/world_preset',
    // worldgen
    'worldgen/biome': 'worldgen/biome',
    'worldgen/configured_carver': 'worldgen/configured_carver',
    'worldgen/configured_decorator': 'worldgen/configured_decorator',
    'worldgen/configured_feature': 'worldgen/configured_feature',
    'worldgen/configured_structure_feature': 'worldgen/configured_structure_feature',
    'worldgen/configured_surface_builder': 'worldgen/configured_surface_builder',
    'worldgen/density_function': 'worldgen/density_function',
    'worldgen/noise': 'worldgen/noise',
    'worldgen/noise_settings': 'worldgen/noise_settings',
    'worldgen/placed_feature': 'worldgen/placed_feature',
    'worldgen/processor_list': 'worldgen/processor_list',
    'worldgen/structure_set': 'worldgen/structure_set',
    'worldgen/template_pool': 'worldgen/template_pool'
};

export const fileTypePaths: Record<FileType, string> = {
    // common
    advancement: 'data/*/advancement/**',
    dimension: 'data/*/dimension/**',
    dimension_type: 'data/*/dimension_type/**',
    function: 'data/*/function/**',
    item_modifier: 'data/*/item_modifier/**',
    loot_table: 'data/*/loot_table/**',
    predicate: 'data/*/predicate/**',
    recipe: 'data/*/recipe/**',
    structure: 'data/*/structure/**',
    zombie_nautilus_variant: 'data/*/zombie_nautilus_variant/**',
    banner_pattern: 'data/*/banner_pattern/**',
    world_clock: 'data/*/world_clock/**',
    wolf_variant: 'data/*/wolf_variant/**',
    villager_trade: 'data/*/villager_trade/**',
    trim_pattern: 'data/*/trim_pattern/**',
    trim_material: 'data/*/trim_material/**',
    trial_spawner: 'data/*/trial_spawner/**',
    trade_set: 'data/*/trade_set/**',
    timeline: 'data/*/timeline/**',
    test_instance: 'data/*/test_instance/**',
    test_environment: 'data/*/test_environment/**',
    sulfur_cube_archetype: 'data/*/sulfur_cube_archetype/**',
    pig_variant: 'data/*/pig_variant/**',
    pig_sound_variant: 'data/*/pig_sound_variant/**',
    painting_variant: 'data/*/painting_variant/**',
    jukebox_song: 'data/*/jukebox_song/**',
    instrument: 'data/*/instrument/**',
    frog_variant: 'data/*/frog_variant/**',
    enchantment_provider: 'data/*/enchantment_provider/**',
    enchantment: 'data/*/enchantment/**',
    dialog: 'data/*/dialog/**',
    decorated_pot_pattern: 'data/*/decorated_pot_pattern/**',
    damage_type: 'data/*/damage_type/**',
    cow_variant: 'data/*/cow_variant/**',
    cow_sound_variant: 'data/*/cow_sound_variant/**',
    context_int_provider: 'data/*/context_int_provider/**',
    context_float_provider: 'data/*/context_float_provider/**',
    chicken_variant: 'data/*/chicken_variant/**',
    chicken_sound_variant: 'data/*/chicken_sound_variant/**',
    chat_type: 'data/*/chat_type/**',
    cat_variant: 'data/*/cat_variant/**',
    cat_sound_variant: 'data/*/cat_sound_variant/**',
    block_transformer: 'data/*/block_transformer/**',
    // tag
    'tag/banner_pattern': 'data/*/tags/banner_pattern/**',
    'tag/block': 'data/*/tags/block/**',
    'tag/block_sound_set': 'data/*/tags/block_sound_set/**',
    'tag/cat_variant': 'data/*/tags/cat_variant/**',
    'tag/damage_type': 'data/*/tags/damage_type/**',
    'tag/dialog': 'data/*/tags/dialog/**',
    'tag/enchantment': 'data/*/tags/enchantment/**',
    'tag/entity_type': 'data/*/tags/entity_type/**',
    'tag/fluid': 'data/*/tags/fluid/**',
    'tag/function': 'data/*/tags/function/**',
    'tag/game_event': 'data/*/tags/game_event/**',
    'tag/instrument': 'data/*/tags/instrument/**',
    'tag/item': 'data/*/tags/item/**',
    'tag/item_modifier': 'data/*/tags/item_modifier/**',
    'tag/loot_table': 'data/*/tags/loot_table/**',
    'tag/number_provider': 'data/*/tags/number_provider/**',
    'tag/painting_variant': 'data/*/tags/painting_variant/**',
    'tag/point_of_interest_type': 'data/*/tags/point_of_interest_type/**',
    'tag/potion': 'data/*/tags/potion/**',
    'tag/predicate': 'data/*/tags/predicate/**',
    'tag/recipe': 'data/*/tags/recipe/**',
    'tag/slot_source': 'data/*/tags/slot_source/**',
    'tag/timeline': 'data/*/tags/timeline/**',
    'tag/villager_trade': 'data/*/tags/villager_trade/**',
    // tag/worldgen
    'tag/worldgen/biome': 'data/*/tags/worldgen/biome/**',
    'tag/worldgen/configured_carver': 'data/*/tags/worldgen/configured_carver/**',
    'tag/worldgen/configured_decorator': 'data/*/tags/worldgen/configured_decorator/**',
    'tag/worldgen/configured_feature': 'data/*/tags/worldgen/configured_feature/**',
    'tag/worldgen/configured_structure_feature': 'data/*/tags/worldgen/configured_structure_feature/**',
    'tag/worldgen/configured_surface_builder': 'data/*/tags/worldgen/configured_surface_builder/**',
    'tag/worldgen/density_function': 'data/*/tags/worldgen/density_function/**',
    'tag/worldgen/feature': 'data/*/tags/worldgen/feature/**',
    'tag/worldgen/flat_level_generator_preset': 'data/*/tags/worldgen/flat_level_generator_preset/**',
    'tag/worldgen/noise': 'data/*/tags/worldgen/noise/**',
    'tag/worldgen/noise_settings': 'data/*/tags/worldgen/noise_settings/**',
    'tag/worldgen/placed_feature': 'data/*/tags/worldgen/placed_feature/**',
    'tag/worldgen/processor_list': 'data/*/tags/worldgen/processor_list/**',
    'tag/worldgen/structure': 'data/*/tags/worldgen/structure/**',
    'tag/worldgen/structure_set': 'data/*/tags/worldgen/structure_set/**',
    'tag/worldgen/template_pool': 'data/*/tags/worldgen/template_pool/**',
    'tag/worldgen/world_preset': 'data/*/tags/worldgen/world_preset/**',
    // worldgen
    'worldgen/biome': 'data/*/worldgen/biome/**',
    'worldgen/configured_carver': 'data/*/worldgen/configured_carver/**',
    'worldgen/configured_decorator': 'data/*/worldgen/configured_decorator/**',
    'worldgen/configured_feature': 'data/*/worldgen/configured_feature/**',
    'worldgen/configured_structure_feature': 'data/*/worldgen/configured_structure_feature/**',
    'worldgen/configured_surface_builder': 'data/*/worldgen/configured_surface_builder/**',
    'worldgen/density_function': 'data/*/worldgen/density_function/**',
    'worldgen/noise': 'data/*/worldgen/noise/**',
    'worldgen/noise_settings': 'data/*/worldgen/noise_settings/**',
    'worldgen/placed_feature': 'data/*/worldgen/placed_feature/**',
    'worldgen/processor_list': 'data/*/worldgen/processor_list/**',
    'worldgen/structure_set': 'data/*/worldgen/structure_set/**',
    'worldgen/template_pool': 'data/*/worldgen/template_pool/**'
};

/**
 * ファイルの種類を取得します
 * @param filePath 取得したいファイルのファイルパス
 * @param datapackRoot データパックのルートパス
 */
export function getFileType(filePath: string, datapackRoot: string): FileType | undefined {
    const dir = path.relative(datapackRoot, filePath).replace(/(\\|$)/g, '/');
    console.log(dir);
    for (const type of Object.keys(fileTypePaths) as FileType[]) {
        if (minimatch(dir, fileTypePaths[type]))
            return type;
    }
    return undefined;
}

export function getFilePath(fileType: FileType | undefined): string | undefined {
    if (!fileType) return undefined;
    return fileTypeFolderName[fileType];
}
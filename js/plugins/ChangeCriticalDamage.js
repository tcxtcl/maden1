//=============================================================================
// ChangeCriticalDamage.js
//=============================================================================
/*:
* @plugindesc Change the damage when critical occurs.
* @author Yumineko
*
* @help This plugin does not provide plugin commands.
*
* This plugin is released under the MIT License.
*/
/*:ja
* @plugindesc クリティカルが発生したときのダメージを変更します。
* @author 弓猫
*
* @help プラグインコマンドはありません。
*
* このプラグインはMITライセンスです。
*/

Game_Action.prototype.applyCritical = function(damage) {
    return damage * 1000;
};
function currencyDemonlord(element, actorId, callback) {
    let currencyIcon = $(`<a class="currency-control currency-trade" style="margin: 0 10px 0 -10px" title="${game.i18n.localize("LetsTrade5E.Send")}">
        <i class="fas fa-balance-scale-right"></i>
    </a>`)[0];
    currencyIcon.dataset.actorId = actorId;
    currencyIcon.addEventListener("click", callback);

    let insertPoint = $("div.tab.items > .dl-item-row-header > div.col-1 > .wealth-edit", element)[0];
    insertPoint.before(currencyIcon);
}

function currencyDefault(element, actorId, callback) {
    let currencyIcon = $(`<a class="currency-control currency-trade" title="${game.i18n.localize("LetsTrade5E.Send")}">
        <i class="fas fa-balance-scale-right"></i>
    </a>`)[0];
    currencyIcon.dataset.actorId = actorId;
    currencyIcon.addEventListener("click", callback);

    let insertPoint = $("ol.currency .currency-convert", element)[0];
    insertPoint.after(currencyIcon);
}

function currencyTidySheet(element, actorId, callback) {
    let currencyIcon = $(`<a class="currency-control currency-trade" title="${game.i18n.localize("LetsTrade5E.Send")}">
        <i class="fas fa-balance-scale-right"></i>
    </a>`)[0];
    currencyIcon.dataset.actorId = actorId;
    currencyIcon.addEventListener("click", callback);

    let insertPoint = $("ul.currency li.currency-header", element)[0];
    let insert = $(`<li class="currency-header flexrow"></li>`).append(currencyIcon);
    insertPoint.before(insert[0]);
}

function currencyDndbcs(element, actorId, callback) {
    let currencyIcon = $(`<a class="currency-control currency-trade" title="${game.i18n.localize("LetsTrade5E.Send")}">
        <i class="fas fa-balance-scale-right"></i>
    </a>`)[0];
    currencyIcon.dataset.actorId = actorId;
    currencyIcon.addEventListener("click", callback);

    let insertPoint = $("ol.currency", element);
    insertPoint.prepend(currencyIcon);
}

function currencyCb5es(element, actorId, callback) {
    let currencyIcon = $(`<a class="currency-control currency-trade" title="${game.i18n.localize("LetsTrade5E.Send")}">
        <i class="fas fa-balance-scale-right"></i>
    </a>`)[0];
    currencyIcon.dataset.actorId = actorId;
    currencyIcon.addEventListener("click", callback);

    let insertPoint = $(".currency h3", element);
    insertPoint.append(currencyIcon);
}

function currencyOgl5e(element, actorId, callback) {
    let currencyIcon = $(`<a class="currency-control currency-trade" title="${game.i18n.localize("LetsTrade5E.Send")}">
        <i class="fas fa-balance-scale-right"></i>
    </a>`)[0];
    currencyIcon.dataset.actorId = actorId;
    currencyIcon.addEventListener("click", callback);

    let insertPoint = $(".inventory-sidebar .currency", element);
    insertPoint.append($(`<div style="text-align: center; padding-top: 10px;"></div>`).append(currencyIcon));
}

function currencySw5e(element, actorId, callback) {
    let currencyIcon = $(`<a class="currency-control currency-trade" title="${game.i18n.localize("LetsTrade5E.Send")}">
        <i class="fas fa-balance-scale-right"></i>
    </a>`)[0];
    currencyIcon.dataset.actorId = actorId;
    currencyIcon.addEventListener("click", callback);

    let insertPoint = $(".currency", element)[0];
    insertPoint.append(currencyIcon);
}

function currencyLootSheet5e(element, actorId, callback) {
    let currencyIcon = $(`<a class="currency-control currency-trade" title="${game.i18n.localize("LetsTrade5E.Send")}">
        <i class="fas fa-balance-scale-right"></i>
    </a>`)[0];
    currencyIcon.dataset.actorId = actorId;
    currencyIcon.addEventListener("click", callback);

    let insertPoint = $("a.currency-loot", element)[0];
    insertPoint.after(currencyIcon);
}

/**
 * Returns a list item dom elements belonging to the sheet elements
 *
 * @param {object} element The sheet element
 *
 * @returns {object[]}
 */
function fetchDemonlord(element) {
    return  $(".tab.items > .dl-item-row.dropitem", element);
}

function fetchDefault(element) {
    return  $(".inventory.tab .item", element);
}

function fetchOgl5e(element) {
    return $("section.inventory .inventory-list.items-list .item", element);
}

function fetchLootSheet5e(element) {
    return  $(".inventory-list .item", element);
}

/**
 * Injects the trade icon onto a DOM item element.
 *
 * @param {object} item
 * @param {function} callback
 */
 function itemDemonlord(item, actorId, callback) {
    const deleteIcon = $(".dl-clickable.item-delete", item);
    const tradeIcon = $(`<a class="item-control dl-clickable item-trade" style="margin: 0 10px 0 -15px" title="${game.i18n.localize("LetsTrade5E.Send")}">
        <i class="fas fa-balance-scale-right"></i>
    </a>`)[0];

    tradeIcon.dataset.itemId = item.dataset.itemId;
    tradeIcon.dataset.actorId = actorId;
    tradeIcon.addEventListener("click", callback);

    if (deleteIcon[0]) {
        deleteIcon.parent().removeClass('dl-clickable');
        deleteIcon[0].before(tradeIcon);
    }
}

function itemDefault(item, actorId, callback) {
    const edit = $(".item-control.item-edit", item);
    const icon = $(`<a class="item-control item-trade" title="${game.i18n.localize("LetsTrade5E.Send")}">
        <i class="fas fa-balance-scale-right"></i>
    </a>`)[0];

    icon.dataset.itemId = item.dataset.itemId;
    icon.dataset.actorId = actorId;
    icon.addEventListener("click", callback);

    if (edit[0])
        edit[0].after(icon);
}

function itemTidy5e(item, actorId, callback) {
    const edit = $(".item-control.item-edit", item);
    const icon = $(`<a class="item-control item-trade" title="${game.i18n.localize("LetsTrade5E.Send")}">
        <i class="fas fa-balance-scale-right"></i>
        <span class="control-label">${game.i18n.localize("LetsTrade5E.Send")}</span>
    </a>`)[0];

    icon.dataset.itemId = item.dataset.itemId;
    icon.dataset.actorId = actorId;
    icon.addEventListener("click", callback);

    if (edit[0])
        edit[0].after(icon);
}

function itemLootSheet5e(item, actorId, callback) {
    const edit = $(".item-control.item-loot", item);
    const icon = $(`<a class="item-control item-trade" title="${game.i18n.localize("LetsTrade5E.Send")}">
        <i class="fas fa-balance-scale-right"></i>
    </a>`)[0];

    icon.dataset.itemId = item.dataset.itemId;
    icon.dataset.actorId = actorId;
    icon.addEventListener("click", callback);

    if (edit[0])
        edit[0].after(icon);
}

/**
 * Updates the currency
 *
 * @param currency {object} object to update currency on
 * @param key {string}type of currency to update
 * @param subtractValue {number} amount to subtract
 */
function updateCurrencyDemonlord(currency, key, subtractValue) {
    currency[key] = (parseInt(currency[key]) - parseInt(subtractValue)).toString();
}

function updateCurrencyDefault(currency, key, subtractValue) {
    currency[key] -= subtractValue;
}

function updateCurrencyLootSheet5e(currency, key, subtractValue) {
    currency[key].value = (parseInt(currency[key].value) - subtractValue).toString();
}

/**
 * Parses currencyMax
 *
 * @param currencyMax {object} object to retrieve currencyMax from
 */
function parseCurrencyMaxDemonlord(currencyMax) {
    return currencyMax ? parseInt(currencyMax) : 0;
}

function parseCurrencyMaxDefault(currencyMax) {
    return currencyMax;
}

function parseCurrencyMaxLootSheet5e(currencyMax) {
    return parseInt(currencyMax.value);
}

function sheetCompatibilityName(sheetClassesRaw) {
    // List of supported sheets
    const names = Object.keys(compatibility).filter(e => e !== "default");

    const sheetClasses = sheetClassesRaw.length === 1
        && sheetClassesRaw[0].indexOf(" ") >= 0 ? sheetClassesRaw[0].split(" ") : sheetClassesRaw;

    for (let compatabilityName of names) {
        if (sheetClasses.includes(compatabilityName)) {
            return compatabilityName;
        }
    }

    // Default Sheet
    return "default";
}

/**
 * Handles different currency sources for different systems
 */
function parseCurrencyDemonlord(system) {
    return {
        gc: system.wealth.gc,
        ss: system.wealth.ss,
        cp: system.wealth.cp,
        bits: system.wealth.bits
    };
}

function parseCurrencyDefault(system) {
    return system.currency;
}

/**
 * Applies currency changes to the destination actor
 */
function applyCurrencyDemonlord(actor, currency) {
    actor.update({
        system: {
            wealth: currency
        }
    });
}

function applyCurrencyDefault(actor, currency) {
    actor.update({
        system: {
            currency: currency
        }
    });
}

const compatibility = {
    "demonlord": {
        currency: currencyDemonlord,
        fetch: fetchDemonlord,
        item: itemDemonlord,
        updateCurrency: updateCurrencyDemonlord,
        parseCurrencyMax: parseCurrencyMaxDemonlord,
        parseCurrency: parseCurrencyDemonlord,
        applyCurrency: applyCurrencyDemonlord
    },
    "tidy5e": {
        currency: currencyTidySheet,
        fetch: fetchDefault,
        item: itemTidy5e,
        updateCurrency: updateCurrencyDefault,
        parseCurrencyMax: parseCurrencyMaxDefault,
        parseCurrency: parseCurrencyDefault,
        applyCurrency: applyCurrencyDefault
    },
    "alt5e": {
        currency: currencyDefault,
        fetch: fetchDefault,
        item: itemDefault,
        updateCurrency: updateCurrencyDefault,
        parseCurrencyMax: parseCurrencyMaxDefault,
        parseCurrency: parseCurrencyDefault,
        applyCurrency: applyCurrencyDefault
    },
    "dndbcs": {
        currency: currencyDndbcs,
        fetch: fetchDefault,
        item: itemDefault,
        updateCurrency: updateCurrencyDefault,
        parseCurrencyMax: parseCurrencyMaxDefault,
        parseCurrency: parseCurrencyDefault,
        applyCurrency: applyCurrencyDefault
    },
    "cb5es": {
        currency: currencyCb5es,
        fetch: fetchDefault,
        item: itemDefault,
        updateCurrency: updateCurrencyDefault,
        parseCurrencyMax: parseCurrencyMaxDefault,
        parseCurrency: parseCurrencyDefault,
        applyCurrency: applyCurrencyDefault
    },
    "ogl5e-sheet": {
        currency: currencyOgl5e,
        fetch: fetchOgl5e,
        item: itemDefault,
        updateCurrency: updateCurrencyDefault,
        parseCurrencyMax: parseCurrencyMaxDefault,
        parseCurrency: parseCurrencyDefault,
        applyCurrency: applyCurrencyDefault
    },
    "sw5e":{
        currency: currencySw5e,
        fetch: fetchDefault,
        item: itemDefault,
        updateCurrency: updateCurrencyDefault,
        parseCurrencyMax: parseCurrencyMaxDefault,
        parseCurrency: parseCurrencyDefault,
        applyCurrency: applyCurrencyDefault
    },
    "tidysw5e":{
        currency: currencyTidySheet,
        fetch: fetchDefault,
        item: itemTidy5e,
        updateCurrency: updateCurrencyDefault,
        parseCurrencyMax: parseCurrencyMaxDefault,
        parseCurrency: parseCurrencyDefault,
        applyCurrency: applyCurrencyDefault
    },
    "loot-sheet-npc": {
        currency: currencyLootSheet5e,
        fetch: fetchLootSheet5e,
        item: itemLootSheet5e,
        updateCurrency: updateCurrencyLootSheet5e,
        parseCurrencyMax: parseCurrencyMaxLootSheet5e,
        parseCurrency: parseCurrencyDefault,
        applyCurrency: applyCurrencyDefault
    },
    "default": {
        currency: currencyDefault,
        fetch: fetchDefault,
        item: itemDefault,
        updateCurrency: updateCurrencyDefault,
        parseCurrencyMax: parseCurrencyMaxDefault,
        parseCurrency: parseCurrencyDefault,
        applyCurrency: applyCurrencyDefault
    },
};

/**
 * Returns a compatibility object for sheet class
 *
 * @param {object} sheet
 *
 * @returns {object}
 */
export function getCompatibility(sheet) {
    const sheetName = sheetCompatibilityName(sheet.options.classes);
    return compatibility[sheetName];
}

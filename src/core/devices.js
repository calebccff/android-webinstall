const DEVICE_NAMES = {
    sdm845: "OnePlus 6",
    fajita: "OnePlus 6T",
    axolotl: "SHIFT6mq",
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}

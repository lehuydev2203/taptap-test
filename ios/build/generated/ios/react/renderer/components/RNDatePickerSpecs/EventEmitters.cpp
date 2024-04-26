
/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GenerateEventEmitterCpp.js
 */

#include <react/renderer/components/RNDatePickerSpecs/EventEmitters.h>


namespace facebook::react {

void RNDatePickerEventEmitter::onChange(OnChange $event) const {
  dispatchEvent("change", [$event=std::move($event)](jsi::Runtime &runtime) {
    auto $payload = jsi::Object(runtime);
    $payload.setProperty(runtime, "timestamp", $event.timestamp);
    return $payload;
  });
}


void RNDatePickerEventEmitter::onConfirm(OnConfirm $event) const {
  dispatchEvent("confirm", [$event=std::move($event)](jsi::Runtime &runtime) {
    auto $payload = jsi::Object(runtime);
    $payload.setProperty(runtime, "timestamp", $event.timestamp);
    return $payload;
  });
}


void RNDatePickerEventEmitter::onCancel(OnCancel $event) const {
  dispatchEvent("cancel", [](jsi::Runtime &runtime) {
    auto $payload = jsi::Object(runtime);
    
    return $payload;
  });
}

} // namespace facebook::react

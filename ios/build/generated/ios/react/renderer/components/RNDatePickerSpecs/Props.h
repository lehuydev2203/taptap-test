
/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GeneratePropsH.js
 */
#pragma once

#include <react/renderer/components/view/ViewProps.h>
#include <react/renderer/core/PropsParserContext.h>

namespace facebook::react {

enum class RNDatePickerMode { Date, Time, Datetime };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, RNDatePickerMode &result) {
  auto string = (std::string)value;
  if (string == "date") { result = RNDatePickerMode::Date; return; }
  if (string == "time") { result = RNDatePickerMode::Time; return; }
  if (string == "datetime") { result = RNDatePickerMode::Datetime; return; }
  abort();
}

static inline std::string toString(const RNDatePickerMode &value) {
  switch (value) {
    case RNDatePickerMode::Date: return "date";
    case RNDatePickerMode::Time: return "time";
    case RNDatePickerMode::Datetime: return "datetime";
  }
}
enum class RNDatePickerIs24hourSource { Locale, Device };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, RNDatePickerIs24hourSource &result) {
  auto string = (std::string)value;
  if (string == "locale") { result = RNDatePickerIs24hourSource::Locale; return; }
  if (string == "device") { result = RNDatePickerIs24hourSource::Device; return; }
  abort();
}

static inline std::string toString(const RNDatePickerIs24hourSource &value) {
  switch (value) {
    case RNDatePickerIs24hourSource::Locale: return "locale";
    case RNDatePickerIs24hourSource::Device: return "device";
  }
}
enum class RNDatePickerTheme { Light, Dark, Auto };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, RNDatePickerTheme &result) {
  auto string = (std::string)value;
  if (string == "light") { result = RNDatePickerTheme::Light; return; }
  if (string == "dark") { result = RNDatePickerTheme::Dark; return; }
  if (string == "auto") { result = RNDatePickerTheme::Auto; return; }
  abort();
}

static inline std::string toString(const RNDatePickerTheme &value) {
  switch (value) {
    case RNDatePickerTheme::Light: return "light";
    case RNDatePickerTheme::Dark: return "dark";
    case RNDatePickerTheme::Auto: return "auto";
  }
}

class RNDatePickerProps final : public ViewProps {
 public:
  RNDatePickerProps() = default;
  RNDatePickerProps(const PropsParserContext& context, const RNDatePickerProps &sourceProps, const RawProps &rawProps);

#pragma mark - Props

  std::string locale{};
  double date{0.0};
  double maximumDate{0.0};
  double minimumDate{0.0};
  int minuteInterval{0};
  RNDatePickerMode mode{RNDatePickerMode::Datetime};
  std::string timeZoneOffsetInMinutes{};
  std::string textColor{};
  std::string dividerColor{};
  std::string buttonColor{};
  RNDatePickerIs24hourSource is24hourSource{RNDatePickerIs24hourSource::Device};
  RNDatePickerTheme theme{RNDatePickerTheme::Auto};
  bool modal{false};
  bool open{false};
  std::string confirmText{};
  std::string cancelText{};
  std::string title{};
};

} // namespace facebook::react
/*
Proxima DB API

Documentation for the http/https server for Proxima Database

API version: 1.0.3
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// InlineObject5 struct for InlineObject5
type InlineObject5 struct {
	Query *map[string]interface{} `json:"query,omitempty"`
	Limit *map[string]interface{} `json:"limit,omitempty"`
	Prove *map[string]interface{} `json:"prove,omitempty"`
}

// NewInlineObject5 instantiates a new InlineObject5 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInlineObject5() *InlineObject5 {
	this := InlineObject5{}
	return &this
}

// NewInlineObject5WithDefaults instantiates a new InlineObject5 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInlineObject5WithDefaults() *InlineObject5 {
	this := InlineObject5{}
	return &this
}

// GetQuery returns the Query field value if set, zero value otherwise.
func (o *InlineObject5) GetQuery() map[string]interface{} {
	if o == nil || o.Query == nil {
		var ret map[string]interface{}
		return ret
	}
	return *o.Query
}

// GetQueryOk returns a tuple with the Query field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject5) GetQueryOk() (*map[string]interface{}, bool) {
	if o == nil || o.Query == nil {
		return nil, false
	}
	return o.Query, true
}

// HasQuery returns a boolean if a field has been set.
func (o *InlineObject5) HasQuery() bool {
	if o != nil && o.Query != nil {
		return true
	}

	return false
}

// SetQuery gets a reference to the given map[string]interface{} and assigns it to the Query field.
func (o *InlineObject5) SetQuery(v map[string]interface{}) {
	o.Query = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *InlineObject5) GetLimit() map[string]interface{} {
	if o == nil || o.Limit == nil {
		var ret map[string]interface{}
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject5) GetLimitOk() (*map[string]interface{}, bool) {
	if o == nil || o.Limit == nil {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *InlineObject5) HasLimit() bool {
	if o != nil && o.Limit != nil {
		return true
	}

	return false
}

// SetLimit gets a reference to the given map[string]interface{} and assigns it to the Limit field.
func (o *InlineObject5) SetLimit(v map[string]interface{}) {
	o.Limit = &v
}

// GetProve returns the Prove field value if set, zero value otherwise.
func (o *InlineObject5) GetProve() map[string]interface{} {
	if o == nil || o.Prove == nil {
		var ret map[string]interface{}
		return ret
	}
	return *o.Prove
}

// GetProveOk returns a tuple with the Prove field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject5) GetProveOk() (*map[string]interface{}, bool) {
	if o == nil || o.Prove == nil {
		return nil, false
	}
	return o.Prove, true
}

// HasProve returns a boolean if a field has been set.
func (o *InlineObject5) HasProve() bool {
	if o != nil && o.Prove != nil {
		return true
	}

	return false
}

// SetProve gets a reference to the given map[string]interface{} and assigns it to the Prove field.
func (o *InlineObject5) SetProve(v map[string]interface{}) {
	o.Prove = &v
}

func (o InlineObject5) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Query != nil {
		toSerialize["query"] = o.Query
	}
	if o.Limit != nil {
		toSerialize["limit"] = o.Limit
	}
	if o.Prove != nil {
		toSerialize["prove"] = o.Prove
	}
	return json.Marshal(toSerialize)
}

type NullableInlineObject5 struct {
	value *InlineObject5
	isSet bool
}

func (v NullableInlineObject5) Get() *InlineObject5 {
	return v.value
}

func (v *NullableInlineObject5) Set(val *InlineObject5) {
	v.value = val
	v.isSet = true
}

func (v NullableInlineObject5) IsSet() bool {
	return v.isSet
}

func (v *NullableInlineObject5) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInlineObject5(val *InlineObject5) *NullableInlineObject5 {
	return &NullableInlineObject5{value: val, isSet: true}
}

func (v NullableInlineObject5) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInlineObject5) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



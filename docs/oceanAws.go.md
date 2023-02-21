# `oceanAws` Submodule <a name="`oceanAws` Submodule" id="@cdktf/provider-spotinst.oceanAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAws <a name="OceanAws" id="@cdktf/provider-spotinst.oceanAws.OceanAws"></a>

Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws spotinst_ocean_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAws(scope Construct, id *string, config OceanAwsConfig) OceanAws
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig">OceanAwsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig">OceanAwsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler">PutAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putClusterOrientation">PutClusterOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions">PutInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putLoadBalancers">PutLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putScheduledTask">PutScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetAutoscaler">ResetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlacklist">ResetBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetClusterOrientation">ResetClusterOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetControllerId">ResetControllerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetDesiredCapacity">ResetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetDrainingTimeout">ResetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetFallbackToOndemand">ResetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetInstanceMetadataOptions">ResetInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetLoadBalancers">ResetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetMaxSize">ResetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetMinSize">ResetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetRootVolumeSize">ResetRootVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetScheduledTask">ResetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpotPercentage">ResetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpreadNodesBy">ResetSpreadNodesBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUseAsTemplateOnly">ResetUseAsTemplateOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeCommitments">ResetUtilizeCommitments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeReservedInstances">ResetUtilizeReservedInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetWhitelist">ResetWhitelist</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoscaler` <a name="PutAutoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler"></a>

```go
func PutAutoscaler(value OceanAwsAutoscaler)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

---

##### `PutClusterOrientation` <a name="PutClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putClusterOrientation"></a>

```go
func PutClusterOrientation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putClusterOrientation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters"></a>

```go
func PutFilters(value OceanAwsFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

---

##### `PutInstanceMetadataOptions` <a name="PutInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions"></a>

```go
func PutInstanceMetadataOptions(value OceanAwsInstanceMetadataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

---

##### `PutLoadBalancers` <a name="PutLoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLoadBalancers"></a>

```go
func PutLoadBalancers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLoadBalancers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLogging"></a>

```go
func PutLogging(value OceanAwsLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

---

##### `PutScheduledTask` <a name="PutScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putScheduledTask"></a>

```go
func PutScheduledTask(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putScheduledTask.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy"></a>

```go
func PutUpdatePolicy(value OceanAwsUpdatePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

---

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociatePublicIpAddress"></a>

```go
func ResetAssociatePublicIpAddress()
```

##### `ResetAutoscaler` <a name="ResetAutoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetAutoscaler"></a>

```go
func ResetAutoscaler()
```

##### `ResetBlacklist` <a name="ResetBlacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlacklist"></a>

```go
func ResetBlacklist()
```

##### `ResetClusterOrientation` <a name="ResetClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetClusterOrientation"></a>

```go
func ResetClusterOrientation()
```

##### `ResetControllerId` <a name="ResetControllerId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetControllerId"></a>

```go
func ResetControllerId()
```

##### `ResetDesiredCapacity` <a name="ResetDesiredCapacity" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetDesiredCapacity"></a>

```go
func ResetDesiredCapacity()
```

##### `ResetDrainingTimeout` <a name="ResetDrainingTimeout" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetDrainingTimeout"></a>

```go
func ResetDrainingTimeout()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetEbsOptimized"></a>

```go
func ResetEbsOptimized()
```

##### `ResetFallbackToOndemand` <a name="ResetFallbackToOndemand" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetFallbackToOndemand"></a>

```go
func ResetFallbackToOndemand()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetGracePeriod"></a>

```go
func ResetGracePeriod()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetIamInstanceProfile"></a>

```go
func ResetIamInstanceProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetId"></a>

```go
func ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetImageId"></a>

```go
func ResetImageId()
```

##### `ResetInstanceMetadataOptions` <a name="ResetInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetInstanceMetadataOptions"></a>

```go
func ResetInstanceMetadataOptions()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetLoadBalancers` <a name="ResetLoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetLoadBalancers"></a>

```go
func ResetLoadBalancers()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetMaxSize` <a name="ResetMaxSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetMaxSize"></a>

```go
func ResetMaxSize()
```

##### `ResetMinSize` <a name="ResetMinSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetMinSize"></a>

```go
func ResetMinSize()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetMonitoring"></a>

```go
func ResetMonitoring()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetName"></a>

```go
func ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRootVolumeSize` <a name="ResetRootVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetRootVolumeSize"></a>

```go
func ResetRootVolumeSize()
```

##### `ResetScheduledTask` <a name="ResetScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetScheduledTask"></a>

```go
func ResetScheduledTask()
```

##### `ResetSpotPercentage` <a name="ResetSpotPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpotPercentage"></a>

```go
func ResetSpotPercentage()
```

##### `ResetSpreadNodesBy` <a name="ResetSpreadNodesBy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpreadNodesBy"></a>

```go
func ResetSpreadNodesBy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUpdatePolicy"></a>

```go
func ResetUpdatePolicy()
```

##### `ResetUseAsTemplateOnly` <a name="ResetUseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUseAsTemplateOnly"></a>

```go
func ResetUseAsTemplateOnly()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUserData"></a>

```go
func ResetUserData()
```

##### `ResetUtilizeCommitments` <a name="ResetUtilizeCommitments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeCommitments"></a>

```go
func ResetUtilizeCommitments()
```

##### `ResetUtilizeReservedInstances` <a name="ResetUtilizeReservedInstances" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeReservedInstances"></a>

```go
func ResetUtilizeReservedInstances()
```

##### `ResetWhitelist` <a name="ResetWhitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetWhitelist"></a>

```go
func ResetWhitelist()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.OceanAws_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.OceanAws_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.OceanAws_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference">OceanAwsAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientation">ClusterOrientation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList">OceanAwsClusterOrientationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference">OceanAwsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference">OceanAwsInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancers">LoadBalancers</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList">OceanAwsLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference">OceanAwsLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTask">ScheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList">OceanAwsScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList">OceanAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference">OceanAwsUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscalerInput">AutoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklistInput">BlacklistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientationInput">ClusterOrientationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerIdInput">ControllerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacityInput">DesiredCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeoutInput">DrainingTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemandInput">FallbackToOndemandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriodInput">GracePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptionsInput">InstanceMetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancersInput">LoadBalancersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSizeInput">MaxSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSizeInput">MinSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoringInput">MonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSizeInput">RootVolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTaskInput">ScheduledTaskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentageInput">SpotPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesByInput">SpreadNodesByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnlyInput">UseAsTemplateOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitmentsInput">UtilizeCommitmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstancesInput">UtilizeReservedInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelistInput">WhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklist">Blacklist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerId">ControllerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacity">DesiredCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeout">DrainingTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSize">MaxSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSize">MinSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoring">Monitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSize">RootVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentage">SpotPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesBy">SpreadNodesBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnly">UseAsTemplateOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitments">UtilizeCommitments</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstances">UtilizeReservedInstances</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelist">Whitelist</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autoscaler`<sup>Required</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscaler"></a>

```go
func Autoscaler() OceanAwsAutoscalerOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference">OceanAwsAutoscalerOutputReference</a>

---

##### `ClusterOrientation`<sup>Required</sup> <a name="ClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientation"></a>

```go
func ClusterOrientation() OceanAwsClusterOrientationList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList">OceanAwsClusterOrientationList</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.filters"></a>

```go
func Filters() OceanAwsFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference">OceanAwsFiltersOutputReference</a>

---

##### `InstanceMetadataOptions`<sup>Required</sup> <a name="InstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptions"></a>

```go
func InstanceMetadataOptions() OceanAwsInstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference">OceanAwsInstanceMetadataOptionsOutputReference</a>

---

##### `LoadBalancers`<sup>Required</sup> <a name="LoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancers"></a>

```go
func LoadBalancers() OceanAwsLoadBalancersList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList">OceanAwsLoadBalancersList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.logging"></a>

```go
func Logging() OceanAwsLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference">OceanAwsLoggingOutputReference</a>

---

##### `ScheduledTask`<sup>Required</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTask"></a>

```go
func ScheduledTask() OceanAwsScheduledTaskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList">OceanAwsScheduledTaskList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.tags"></a>

```go
func Tags() OceanAwsTagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList">OceanAwsTagsList</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicy"></a>

```go
func UpdatePolicy() OceanAwsUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference">OceanAwsUpdatePolicyOutputReference</a>

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddressInput"></a>

```go
func AssociatePublicIpAddressInput() interface{}
```

- *Type:* interface{}

---

##### `AutoscalerInput`<sup>Optional</sup> <a name="AutoscalerInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscalerInput"></a>

```go
func AutoscalerInput() OceanAwsAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

---

##### `BlacklistInput`<sup>Optional</sup> <a name="BlacklistInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklistInput"></a>

```go
func BlacklistInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterOrientationInput`<sup>Optional</sup> <a name="ClusterOrientationInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientationInput"></a>

```go
func ClusterOrientationInput() interface{}
```

- *Type:* interface{}

---

##### `ControllerIdInput`<sup>Optional</sup> <a name="ControllerIdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerIdInput"></a>

```go
func ControllerIdInput() *string
```

- *Type:* *string

---

##### `DesiredCapacityInput`<sup>Optional</sup> <a name="DesiredCapacityInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacityInput"></a>

```go
func DesiredCapacityInput() *f64
```

- *Type:* *f64

---

##### `DrainingTimeoutInput`<sup>Optional</sup> <a name="DrainingTimeoutInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeoutInput"></a>

```go
func DrainingTimeoutInput() *f64
```

- *Type:* *f64

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimizedInput"></a>

```go
func EbsOptimizedInput() interface{}
```

- *Type:* interface{}

---

##### `FallbackToOndemandInput`<sup>Optional</sup> <a name="FallbackToOndemandInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemandInput"></a>

```go
func FallbackToOndemandInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.filtersInput"></a>

```go
func FiltersInput() OceanAwsFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriodInput"></a>

```go
func GracePeriodInput() *f64
```

- *Type:* *f64

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfileInput"></a>

```go
func IamInstanceProfileInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `InstanceMetadataOptionsInput`<sup>Optional</sup> <a name="InstanceMetadataOptionsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptionsInput"></a>

```go
func InstanceMetadataOptionsInput() OceanAwsInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `LoadBalancersInput`<sup>Optional</sup> <a name="LoadBalancersInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancersInput"></a>

```go
func LoadBalancersInput() interface{}
```

- *Type:* interface{}

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.loggingInput"></a>

```go
func LoggingInput() OceanAwsLogging
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSizeInput"></a>

```go
func MaxSizeInput() *f64
```

- *Type:* *f64

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSizeInput"></a>

```go
func MinSizeInput() *f64
```

- *Type:* *f64

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoringInput"></a>

```go
func MonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RootVolumeSizeInput`<sup>Optional</sup> <a name="RootVolumeSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSizeInput"></a>

```go
func RootVolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `ScheduledTaskInput`<sup>Optional</sup> <a name="ScheduledTaskInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTaskInput"></a>

```go
func ScheduledTaskInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SpotPercentageInput`<sup>Optional</sup> <a name="SpotPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentageInput"></a>

```go
func SpotPercentageInput() *f64
```

- *Type:* *f64

---

##### `SpreadNodesByInput`<sup>Optional</sup> <a name="SpreadNodesByInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesByInput"></a>

```go
func SpreadNodesByInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicyInput"></a>

```go
func UpdatePolicyInput() OceanAwsUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

---

##### `UseAsTemplateOnlyInput`<sup>Optional</sup> <a name="UseAsTemplateOnlyInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnlyInput"></a>

```go
func UseAsTemplateOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `UtilizeCommitmentsInput`<sup>Optional</sup> <a name="UtilizeCommitmentsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitmentsInput"></a>

```go
func UtilizeCommitmentsInput() interface{}
```

- *Type:* interface{}

---

##### `UtilizeReservedInstancesInput`<sup>Optional</sup> <a name="UtilizeReservedInstancesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstancesInput"></a>

```go
func UtilizeReservedInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `WhitelistInput`<sup>Optional</sup> <a name="WhitelistInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelistInput"></a>

```go
func WhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddress"></a>

```go
func AssociatePublicIpAddress() interface{}
```

- *Type:* interface{}

---

##### `Blacklist`<sup>Required</sup> <a name="Blacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklist"></a>

```go
func Blacklist() *[]*string
```

- *Type:* *[]*string

---

##### `ControllerId`<sup>Required</sup> <a name="ControllerId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerId"></a>

```go
func ControllerId() *string
```

- *Type:* *string

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacity"></a>

```go
func DesiredCapacity() *f64
```

- *Type:* *f64

---

##### `DrainingTimeout`<sup>Required</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeout"></a>

```go
func DrainingTimeout() *f64
```

- *Type:* *f64

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimized"></a>

```go
func EbsOptimized() interface{}
```

- *Type:* interface{}

---

##### `FallbackToOndemand`<sup>Required</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemand"></a>

```go
func FallbackToOndemand() interface{}
```

- *Type:* interface{}

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriod"></a>

```go
func GracePeriod() *f64
```

- *Type:* *f64

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSize"></a>

```go
func MaxSize() *f64
```

- *Type:* *f64

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSize"></a>

```go
func MinSize() *f64
```

- *Type:* *f64

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoring"></a>

```go
func Monitoring() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RootVolumeSize`<sup>Required</sup> <a name="RootVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSize"></a>

```go
func RootVolumeSize() *f64
```

- *Type:* *f64

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SpotPercentage`<sup>Required</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentage"></a>

```go
func SpotPercentage() *f64
```

- *Type:* *f64

---

##### `SpreadNodesBy`<sup>Required</sup> <a name="SpreadNodesBy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesBy"></a>

```go
func SpreadNodesBy() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `UseAsTemplateOnly`<sup>Required</sup> <a name="UseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnly"></a>

```go
func UseAsTemplateOnly() interface{}
```

- *Type:* interface{}

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `UtilizeCommitments`<sup>Required</sup> <a name="UtilizeCommitments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitments"></a>

```go
func UtilizeCommitments() interface{}
```

- *Type:* interface{}

---

##### `UtilizeReservedInstances`<sup>Required</sup> <a name="UtilizeReservedInstances" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstances"></a>

```go
func UtilizeReservedInstances() interface{}
```

- *Type:* interface{}

---

##### `Whitelist`<sup>Required</sup> <a name="Whitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelist"></a>

```go
func Whitelist() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAwsAutoscaler <a name="OceanAwsAutoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsAutoscaler {
	AutoHeadroomPercentage: *f64,
	AutoscaleCooldown: *f64,
	AutoscaleDown: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown,
	AutoscaleHeadroom: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom,
	AutoscaleIsAutoConfig: interface{},
	AutoscaleIsEnabled: interface{},
	EnableAutomaticAndManualHeadroom: interface{},
	ExtendedResourceDefinitions: *[]*string,
	ResourceLimits: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAws.OceanAwsAutoscalerResourceLimits,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#auto_headroom_percentage OceanAws#auto_headroom_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleCooldown">AutoscaleCooldown</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_cooldown OceanAws#autoscale_cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsAutoConfig">AutoscaleIsAutoConfig</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_is_auto_config OceanAws#autoscale_is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsEnabled">AutoscaleIsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_is_enabled OceanAws#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.enableAutomaticAndManualHeadroom">EnableAutomaticAndManualHeadroom</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#enable_automatic_and_manual_headroom OceanAws#enable_automatic_and_manual_headroom}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.extendedResourceDefinitions">ExtendedResourceDefinitions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#extended_resource_definitions OceanAws#extended_resource_definitions}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `AutoHeadroomPercentage`<sup>Optional</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoHeadroomPercentage"></a>

```go
AutoHeadroomPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#auto_headroom_percentage OceanAws#auto_headroom_percentage}.

---

##### `AutoscaleCooldown`<sup>Optional</sup> <a name="AutoscaleCooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleCooldown"></a>

```go
AutoscaleCooldown *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_cooldown OceanAws#autoscale_cooldown}.

---

##### `AutoscaleDown`<sup>Optional</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleDown"></a>

```go
AutoscaleDown OceanAwsAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_down OceanAws#autoscale_down}

---

##### `AutoscaleHeadroom`<sup>Optional</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleHeadroom"></a>

```go
AutoscaleHeadroom OceanAwsAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_headroom OceanAws#autoscale_headroom}

---

##### `AutoscaleIsAutoConfig`<sup>Optional</sup> <a name="AutoscaleIsAutoConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsAutoConfig"></a>

```go
AutoscaleIsAutoConfig interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_is_auto_config OceanAws#autoscale_is_auto_config}.

---

##### `AutoscaleIsEnabled`<sup>Optional</sup> <a name="AutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsEnabled"></a>

```go
AutoscaleIsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_is_enabled OceanAws#autoscale_is_enabled}.

---

##### `EnableAutomaticAndManualHeadroom`<sup>Optional</sup> <a name="EnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.enableAutomaticAndManualHeadroom"></a>

```go
EnableAutomaticAndManualHeadroom interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#enable_automatic_and_manual_headroom OceanAws#enable_automatic_and_manual_headroom}.

---

##### `ExtendedResourceDefinitions`<sup>Optional</sup> <a name="ExtendedResourceDefinitions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.extendedResourceDefinitions"></a>

```go
ExtendedResourceDefinitions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#extended_resource_definitions OceanAws#extended_resource_definitions}.

---

##### `ResourceLimits`<sup>Optional</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.resourceLimits"></a>

```go
ResourceLimits OceanAwsAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#resource_limits OceanAws#resource_limits}

---

### OceanAwsAutoscalerAutoscaleDown <a name="OceanAwsAutoscalerAutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsAutoscalerAutoscaleDown {
	EvaluationPeriods: *f64,
	MaxScaleDownPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#evaluation_periods OceanAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_scale_down_percentage OceanAws#max_scale_down_percentage}. |

---

##### `EvaluationPeriods`<sup>Optional</sup> <a name="EvaluationPeriods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.evaluationPeriods"></a>

```go
EvaluationPeriods *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#evaluation_periods OceanAws#evaluation_periods}.

---

##### `MaxScaleDownPercentage`<sup>Optional</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.maxScaleDownPercentage"></a>

```go
MaxScaleDownPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_scale_down_percentage OceanAws#max_scale_down_percentage}.

---

### OceanAwsAutoscalerAutoscaleHeadroom <a name="OceanAwsAutoscalerAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsAutoscalerAutoscaleHeadroom {
	CpuPerUnit: *f64,
	GpuPerUnit: *f64,
	MemoryPerUnit: *f64,
	NumOfUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.cpuPerUnit">CpuPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#cpu_per_unit OceanAws#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.gpuPerUnit">GpuPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#gpu_per_unit OceanAws#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#memory_per_unit OceanAws#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.numOfUnits">NumOfUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#num_of_units OceanAws#num_of_units}. |

---

##### `CpuPerUnit`<sup>Optional</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.cpuPerUnit"></a>

```go
CpuPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#cpu_per_unit OceanAws#cpu_per_unit}.

---

##### `GpuPerUnit`<sup>Optional</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.gpuPerUnit"></a>

```go
GpuPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#gpu_per_unit OceanAws#gpu_per_unit}.

---

##### `MemoryPerUnit`<sup>Optional</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.memoryPerUnit"></a>

```go
MemoryPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#memory_per_unit OceanAws#memory_per_unit}.

---

##### `NumOfUnits`<sup>Optional</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.numOfUnits"></a>

```go
NumOfUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#num_of_units OceanAws#num_of_units}.

---

### OceanAwsAutoscalerResourceLimits <a name="OceanAwsAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsAutoscalerResourceLimits {
	MaxMemoryGib: *f64,
	MaxVcpu: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_memory_gib OceanAws#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_vcpu OceanAws#max_vcpu}. |

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxMemoryGib"></a>

```go
MaxMemoryGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_memory_gib OceanAws#max_memory_gib}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxVcpu"></a>

```go
MaxVcpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_vcpu OceanAws#max_vcpu}.

---

### OceanAwsClusterOrientation <a name="OceanAwsClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsClusterOrientation {
	AvailabilityVsCost: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation.property.availabilityVsCost">AvailabilityVsCost</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#availability_vs_cost OceanAws#availability_vs_cost}. |

---

##### `AvailabilityVsCost`<sup>Optional</sup> <a name="AvailabilityVsCost" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation.property.availabilityVsCost"></a>

```go
AvailabilityVsCost *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#availability_vs_cost OceanAws#availability_vs_cost}.

---

### OceanAwsConfig <a name="OceanAwsConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecurityGroups: *[]*string,
	SubnetIds: *[]*string,
	AssociatePublicIpAddress: interface{},
	Autoscaler: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAws.OceanAwsAutoscaler,
	Blacklist: *[]*string,
	ClusterOrientation: interface{},
	ControllerId: *string,
	DesiredCapacity: *f64,
	DrainingTimeout: *f64,
	EbsOptimized: interface{},
	FallbackToOndemand: interface{},
	Filters: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAws.OceanAwsFilters,
	GracePeriod: *f64,
	IamInstanceProfile: *string,
	Id: *string,
	ImageId: *string,
	InstanceMetadataOptions: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAws.OceanAwsInstanceMetadataOptions,
	KeyName: *string,
	LoadBalancers: interface{},
	Logging: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAws.OceanAwsLogging,
	MaxSize: *f64,
	MinSize: *f64,
	Monitoring: interface{},
	Name: *string,
	Region: *string,
	RootVolumeSize: *f64,
	ScheduledTask: interface{},
	SpotPercentage: *f64,
	SpreadNodesBy: *string,
	Tags: interface{},
	UpdatePolicy: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAws.OceanAwsUpdatePolicy,
	UseAsTemplateOnly: interface{},
	UserData: *string,
	UtilizeCommitments: interface{},
	UtilizeReservedInstances: interface{},
	Whitelist: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#security_groups OceanAws#security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#subnet_ids OceanAws#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#associate_public_ip_address OceanAws#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blacklist">Blacklist</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#blacklist OceanAws#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.clusterOrientation">ClusterOrientation</a></code> | <code>interface{}</code> | cluster_orientation block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.controllerId">ControllerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#controller_id OceanAws#controller_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.desiredCapacity">DesiredCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#desired_capacity OceanAws#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.drainingTimeout">DrainingTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#draining_timeout OceanAws#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#ebs_optimized OceanAws#ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#fallback_to_ondemand OceanAws#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#grace_period OceanAws#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#iam_instance_profile OceanAws#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#id OceanAws#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#image_id OceanAws#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#key_name OceanAws#key_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.loadBalancers">LoadBalancers</a></code> | <code>interface{}</code> | load_balancers block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.maxSize">MaxSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_size OceanAws#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.minSize">MinSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_size OceanAws#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.monitoring">Monitoring</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#monitoring OceanAws#monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#name OceanAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#region OceanAws#region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.rootVolumeSize">RootVolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#root_volume_size OceanAws#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.scheduledTask">ScheduledTask</a></code> | <code>interface{}</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spotPercentage">SpotPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#spot_percentage OceanAws#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spreadNodesBy">SpreadNodesBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#spread_nodes_by OceanAws#spread_nodes_by}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.useAsTemplateOnly">UseAsTemplateOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#use_as_template_only OceanAws#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#user_data OceanAws#user_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeCommitments">UtilizeCommitments</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#utilize_commitments OceanAws#utilize_commitments}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeReservedInstances">UtilizeReservedInstances</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#utilize_reserved_instances OceanAws#utilize_reserved_instances}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.whitelist">Whitelist</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#whitelist OceanAws#whitelist}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#security_groups OceanAws#security_groups}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#subnet_ids OceanAws#subnet_ids}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associatePublicIpAddress"></a>

```go
AssociatePublicIpAddress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#associate_public_ip_address OceanAws#associate_public_ip_address}.

---

##### `Autoscaler`<sup>Optional</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.autoscaler"></a>

```go
Autoscaler OceanAwsAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscaler OceanAws#autoscaler}

---

##### `Blacklist`<sup>Optional</sup> <a name="Blacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blacklist"></a>

```go
Blacklist *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#blacklist OceanAws#blacklist}.

---

##### `ClusterOrientation`<sup>Optional</sup> <a name="ClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.clusterOrientation"></a>

```go
ClusterOrientation interface{}
```

- *Type:* interface{}

cluster_orientation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#cluster_orientation OceanAws#cluster_orientation}

---

##### `ControllerId`<sup>Optional</sup> <a name="ControllerId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.controllerId"></a>

```go
ControllerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#controller_id OceanAws#controller_id}.

---

##### `DesiredCapacity`<sup>Optional</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.desiredCapacity"></a>

```go
DesiredCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#desired_capacity OceanAws#desired_capacity}.

---

##### `DrainingTimeout`<sup>Optional</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.drainingTimeout"></a>

```go
DrainingTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#draining_timeout OceanAws#draining_timeout}.

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.ebsOptimized"></a>

```go
EbsOptimized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#ebs_optimized OceanAws#ebs_optimized}.

---

##### `FallbackToOndemand`<sup>Optional</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.fallbackToOndemand"></a>

```go
FallbackToOndemand interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#fallback_to_ondemand OceanAws#fallback_to_ondemand}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.filters"></a>

```go
Filters OceanAwsFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#filters OceanAws#filters}

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.gracePeriod"></a>

```go
GracePeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#grace_period OceanAws#grace_period}.

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.iamInstanceProfile"></a>

```go
IamInstanceProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#iam_instance_profile OceanAws#iam_instance_profile}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#id OceanAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#image_id OceanAws#image_id}.

---

##### `InstanceMetadataOptions`<sup>Optional</sup> <a name="InstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.instanceMetadataOptions"></a>

```go
InstanceMetadataOptions OceanAwsInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#instance_metadata_options OceanAws#instance_metadata_options}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#key_name OceanAws#key_name}.

---

##### `LoadBalancers`<sup>Optional</sup> <a name="LoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.loadBalancers"></a>

```go
LoadBalancers interface{}
```

- *Type:* interface{}

load_balancers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#load_balancers OceanAws#load_balancers}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.logging"></a>

```go
Logging OceanAwsLogging
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#logging OceanAws#logging}

---

##### `MaxSize`<sup>Optional</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.maxSize"></a>

```go
MaxSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_size OceanAws#max_size}.

---

##### `MinSize`<sup>Optional</sup> <a name="MinSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.minSize"></a>

```go
MinSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_size OceanAws#min_size}.

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.monitoring"></a>

```go
Monitoring interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#monitoring OceanAws#monitoring}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#name OceanAws#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#region OceanAws#region}.

---

##### `RootVolumeSize`<sup>Optional</sup> <a name="RootVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.rootVolumeSize"></a>

```go
RootVolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#root_volume_size OceanAws#root_volume_size}.

---

##### `ScheduledTask`<sup>Optional</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.scheduledTask"></a>

```go
ScheduledTask interface{}
```

- *Type:* interface{}

scheduled_task block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#scheduled_task OceanAws#scheduled_task}

---

##### `SpotPercentage`<sup>Optional</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spotPercentage"></a>

```go
SpotPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#spot_percentage OceanAws#spot_percentage}.

---

##### `SpreadNodesBy`<sup>Optional</sup> <a name="SpreadNodesBy" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spreadNodesBy"></a>

```go
SpreadNodesBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#spread_nodes_by OceanAws#spread_nodes_by}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#tags OceanAws#tags}

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.updatePolicy"></a>

```go
UpdatePolicy OceanAwsUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#update_policy OceanAws#update_policy}

---

##### `UseAsTemplateOnly`<sup>Optional</sup> <a name="UseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.useAsTemplateOnly"></a>

```go
UseAsTemplateOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#use_as_template_only OceanAws#use_as_template_only}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#user_data OceanAws#user_data}.

---

##### `UtilizeCommitments`<sup>Optional</sup> <a name="UtilizeCommitments" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeCommitments"></a>

```go
UtilizeCommitments interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#utilize_commitments OceanAws#utilize_commitments}.

---

##### `UtilizeReservedInstances`<sup>Optional</sup> <a name="UtilizeReservedInstances" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeReservedInstances"></a>

```go
UtilizeReservedInstances interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#utilize_reserved_instances OceanAws#utilize_reserved_instances}.

---

##### `Whitelist`<sup>Optional</sup> <a name="Whitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.whitelist"></a>

```go
Whitelist *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#whitelist OceanAws#whitelist}.

---

### OceanAwsFilters <a name="OceanAwsFilters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsFilters {
	Architectures: *[]*string,
	Categories: *[]*string,
	DiskTypes: *[]*string,
	ExcludeFamilies: *[]*string,
	ExcludeMetal: interface{},
	Hypervisor: *[]*string,
	IncludeFamilies: *[]*string,
	IsEnaSupported: *string,
	MaxGpu: *f64,
	MaxMemoryGib: *f64,
	MaxNetworkPerformance: *f64,
	MaxVcpu: *f64,
	MinEnis: *f64,
	MinGpu: *f64,
	MinMemoryGib: *f64,
	MinNetworkPerformance: *f64,
	MinVcpu: *f64,
	RootDeviceTypes: *[]*string,
	VirtualizationTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.architectures">Architectures</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#architectures OceanAws#architectures}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.categories">Categories</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#categories OceanAws#categories}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.diskTypes">DiskTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#disk_types OceanAws#disk_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeFamilies">ExcludeFamilies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#exclude_families OceanAws#exclude_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeMetal">ExcludeMetal</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#exclude_metal OceanAws#exclude_metal}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.hypervisor">Hypervisor</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#hypervisor OceanAws#hypervisor}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.includeFamilies">IncludeFamilies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#include_families OceanAws#include_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.isEnaSupported">IsEnaSupported</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#is_ena_supported OceanAws#is_ena_supported}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxGpu">MaxGpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_gpu OceanAws#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_memory_gib OceanAws#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxNetworkPerformance">MaxNetworkPerformance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_network_performance OceanAws#max_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_vcpu OceanAws#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minEnis">MinEnis</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_enis OceanAws#min_enis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minGpu">MinGpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_gpu OceanAws#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minMemoryGib">MinMemoryGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_memory_gib OceanAws#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minNetworkPerformance">MinNetworkPerformance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_network_performance OceanAws#min_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minVcpu">MinVcpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_vcpu OceanAws#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.rootDeviceTypes">RootDeviceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#root_device_types OceanAws#root_device_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.virtualizationTypes">VirtualizationTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#virtualization_types OceanAws#virtualization_types}. |

---

##### `Architectures`<sup>Optional</sup> <a name="Architectures" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.architectures"></a>

```go
Architectures *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#architectures OceanAws#architectures}.

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.categories"></a>

```go
Categories *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#categories OceanAws#categories}.

---

##### `DiskTypes`<sup>Optional</sup> <a name="DiskTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.diskTypes"></a>

```go
DiskTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#disk_types OceanAws#disk_types}.

---

##### `ExcludeFamilies`<sup>Optional</sup> <a name="ExcludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeFamilies"></a>

```go
ExcludeFamilies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#exclude_families OceanAws#exclude_families}.

---

##### `ExcludeMetal`<sup>Optional</sup> <a name="ExcludeMetal" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeMetal"></a>

```go
ExcludeMetal interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#exclude_metal OceanAws#exclude_metal}.

---

##### `Hypervisor`<sup>Optional</sup> <a name="Hypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.hypervisor"></a>

```go
Hypervisor *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#hypervisor OceanAws#hypervisor}.

---

##### `IncludeFamilies`<sup>Optional</sup> <a name="IncludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.includeFamilies"></a>

```go
IncludeFamilies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#include_families OceanAws#include_families}.

---

##### `IsEnaSupported`<sup>Optional</sup> <a name="IsEnaSupported" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.isEnaSupported"></a>

```go
IsEnaSupported *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#is_ena_supported OceanAws#is_ena_supported}.

---

##### `MaxGpu`<sup>Optional</sup> <a name="MaxGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxGpu"></a>

```go
MaxGpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_gpu OceanAws#max_gpu}.

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxMemoryGib"></a>

```go
MaxMemoryGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_memory_gib OceanAws#max_memory_gib}.

---

##### `MaxNetworkPerformance`<sup>Optional</sup> <a name="MaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxNetworkPerformance"></a>

```go
MaxNetworkPerformance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_network_performance OceanAws#max_network_performance}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxVcpu"></a>

```go
MaxVcpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_vcpu OceanAws#max_vcpu}.

---

##### `MinEnis`<sup>Optional</sup> <a name="MinEnis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minEnis"></a>

```go
MinEnis *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_enis OceanAws#min_enis}.

---

##### `MinGpu`<sup>Optional</sup> <a name="MinGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minGpu"></a>

```go
MinGpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_gpu OceanAws#min_gpu}.

---

##### `MinMemoryGib`<sup>Optional</sup> <a name="MinMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minMemoryGib"></a>

```go
MinMemoryGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_memory_gib OceanAws#min_memory_gib}.

---

##### `MinNetworkPerformance`<sup>Optional</sup> <a name="MinNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minNetworkPerformance"></a>

```go
MinNetworkPerformance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_network_performance OceanAws#min_network_performance}.

---

##### `MinVcpu`<sup>Optional</sup> <a name="MinVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minVcpu"></a>

```go
MinVcpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_vcpu OceanAws#min_vcpu}.

---

##### `RootDeviceTypes`<sup>Optional</sup> <a name="RootDeviceTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.rootDeviceTypes"></a>

```go
RootDeviceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#root_device_types OceanAws#root_device_types}.

---

##### `VirtualizationTypes`<sup>Optional</sup> <a name="VirtualizationTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.virtualizationTypes"></a>

```go
VirtualizationTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#virtualization_types OceanAws#virtualization_types}.

---

### OceanAwsInstanceMetadataOptions <a name="OceanAwsInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsInstanceMetadataOptions {
	HttpTokens: *string,
	HttpPutResponseHopLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#http_tokens OceanAws#http_tokens}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#http_put_response_hop_limit OceanAws#http_put_response_hop_limit}. |

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpTokens"></a>

```go
HttpTokens *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#http_tokens OceanAws#http_tokens}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```go
HttpPutResponseHopLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#http_put_response_hop_limit OceanAws#http_put_response_hop_limit}.

---

### OceanAwsLoadBalancers <a name="OceanAwsLoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsLoadBalancers {
	Arn: *string,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#arn OceanAws#arn}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#name OceanAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#type OceanAws#type}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#arn OceanAws#arn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#name OceanAws#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#type OceanAws#type}.

---

### OceanAwsLogging <a name="OceanAwsLogging" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsLogging {
	Export: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAws.OceanAwsLoggingExport,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging.property.export">Export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a></code> | export block. |

---

##### `Export`<sup>Optional</sup> <a name="Export" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLogging.property.export"></a>

```go
Export OceanAwsLoggingExport
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

export block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#export OceanAws#export}

---

### OceanAwsLoggingExport <a name="OceanAwsLoggingExport" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsLoggingExport {
	S3: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport.property.s3">S3</a></code> | <code>interface{}</code> | s3 block. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport.property.s3"></a>

```go
S3 interface{}
```

- *Type:* interface{}

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#s3 OceanAws#s3}

---

### OceanAwsLoggingExportS3 <a name="OceanAwsLoggingExportS3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsLoggingExportS3 {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#id OceanAws#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#id OceanAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OceanAwsScheduledTask <a name="OceanAwsScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsScheduledTask {
	ShutdownHours: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours,
	Tasks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.shutdownHours">ShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a></code> | shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.tasks">Tasks</a></code> | <code>interface{}</code> | tasks block. |

---

##### `ShutdownHours`<sup>Optional</sup> <a name="ShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.shutdownHours"></a>

```go
ShutdownHours OceanAwsScheduledTaskShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#shutdown_hours OceanAws#shutdown_hours}

---

##### `Tasks`<sup>Optional</sup> <a name="Tasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.tasks"></a>

```go
Tasks interface{}
```

- *Type:* interface{}

tasks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#tasks OceanAws#tasks}

---

### OceanAwsScheduledTaskShutdownHours <a name="OceanAwsScheduledTaskShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsScheduledTaskShutdownHours {
	TimeWindows: *[]*string,
	IsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.timeWindows">TimeWindows</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#time_windows OceanAws#time_windows}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#is_enabled OceanAws#is_enabled}. |

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.timeWindows"></a>

```go
TimeWindows *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#time_windows OceanAws#time_windows}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#is_enabled OceanAws#is_enabled}.

---

### OceanAwsScheduledTaskTasks <a name="OceanAwsScheduledTaskTasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsScheduledTaskTasks {
	CronExpression: *string,
	IsEnabled: interface{},
	TaskType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.cronExpression">CronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#cron_expression OceanAws#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#is_enabled OceanAws#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.taskType">TaskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#task_type OceanAws#task_type}. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.cronExpression"></a>

```go
CronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#cron_expression OceanAws#cron_expression}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#is_enabled OceanAws#is_enabled}.

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.taskType"></a>

```go
TaskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#task_type OceanAws#task_type}.

---

### OceanAwsTags <a name="OceanAwsTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#key OceanAws#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#value OceanAws#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#key OceanAws#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#value OceanAws#value}.

---

### OceanAwsUpdatePolicy <a name="OceanAwsUpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsUpdatePolicy {
	ShouldRoll: interface{},
	AutoApplyTags: interface{},
	ConditionedRoll: interface{},
	RollConfig: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.shouldRoll">ShouldRoll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#should_roll OceanAws#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.autoApplyTags">AutoApplyTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#auto_apply_tags OceanAws#auto_apply_tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.conditionedRoll">ConditionedRoll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#conditioned_roll OceanAws#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.shouldRoll"></a>

```go
ShouldRoll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#should_roll OceanAws#should_roll}.

---

##### `AutoApplyTags`<sup>Optional</sup> <a name="AutoApplyTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.autoApplyTags"></a>

```go
AutoApplyTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#auto_apply_tags OceanAws#auto_apply_tags}.

---

##### `ConditionedRoll`<sup>Optional</sup> <a name="ConditionedRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.conditionedRoll"></a>

```go
ConditionedRoll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#conditioned_roll OceanAws#conditioned_roll}.

---

##### `RollConfig`<sup>Optional</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.rollConfig"></a>

```go
RollConfig OceanAwsUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#roll_config OceanAws#roll_config}

---

### OceanAwsUpdatePolicyRollConfig <a name="OceanAwsUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

&oceanaws.OceanAwsUpdatePolicyRollConfig {
	BatchSizePercentage: *f64,
	BatchMinHealthyPercentage: *f64,
	LaunchSpecIds: *[]*string,
	RespectPdb: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.launchSpecIds">LaunchSpecIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#launch_spec_ids OceanAws#launch_spec_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.respectPdb">RespectPdb</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#respect_pdb OceanAws#respect_pdb}. |

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```go
BatchSizePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}.

---

##### `BatchMinHealthyPercentage`<sup>Optional</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```go
BatchMinHealthyPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}.

---

##### `LaunchSpecIds`<sup>Optional</sup> <a name="LaunchSpecIds" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.launchSpecIds"></a>

```go
LaunchSpecIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#launch_spec_ids OceanAws#launch_spec_ids}.

---

##### `RespectPdb`<sup>Optional</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.respectPdb"></a>

```go
RespectPdb interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#respect_pdb OceanAws#respect_pdb}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAwsAutoscalerAutoscaleDownOutputReference <a name="OceanAwsAutoscalerAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsAutoscalerAutoscaleDownOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsAutoscalerAutoscaleDownOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetEvaluationPeriods">ResetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage">ResetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluationPeriods` <a name="ResetEvaluationPeriods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetEvaluationPeriods"></a>

```go
func ResetEvaluationPeriods()
```

##### `ResetMaxScaleDownPercentage` <a name="ResetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```go
func ResetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">MaxScaleDownPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriodsInput"></a>

```go
func EvaluationPeriodsInput() *f64
```

- *Type:* *f64

---

##### `MaxScaleDownPercentageInput`<sup>Optional</sup> <a name="MaxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```go
func MaxScaleDownPercentageInput() *f64
```

- *Type:* *f64

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriods"></a>

```go
func EvaluationPeriods() *f64
```

- *Type:* *f64

---

##### `MaxScaleDownPercentage`<sup>Required</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```go
func MaxScaleDownPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

---


### OceanAwsAutoscalerAutoscaleHeadroomOutputReference <a name="OceanAwsAutoscalerAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsAutoscalerAutoscaleHeadroomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsAutoscalerAutoscaleHeadroomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetCpuPerUnit">ResetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetGpuPerUnit">ResetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetMemoryPerUnit">ResetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetNumOfUnits">ResetNumOfUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPerUnit` <a name="ResetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetCpuPerUnit"></a>

```go
func ResetCpuPerUnit()
```

##### `ResetGpuPerUnit` <a name="ResetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetGpuPerUnit"></a>

```go
func ResetGpuPerUnit()
```

##### `ResetMemoryPerUnit` <a name="ResetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetMemoryPerUnit"></a>

```go
func ResetMemoryPerUnit()
```

##### `ResetNumOfUnits` <a name="ResetNumOfUnits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetNumOfUnits"></a>

```go
func ResetNumOfUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnitInput">CpuPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnitInput">GpuPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnitInput">MemoryPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnitsInput">NumOfUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnit">CpuPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnit">GpuPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnits">NumOfUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuPerUnitInput`<sup>Optional</sup> <a name="CpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnitInput"></a>

```go
func CpuPerUnitInput() *f64
```

- *Type:* *f64

---

##### `GpuPerUnitInput`<sup>Optional</sup> <a name="GpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnitInput"></a>

```go
func GpuPerUnitInput() *f64
```

- *Type:* *f64

---

##### `MemoryPerUnitInput`<sup>Optional</sup> <a name="MemoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnitInput"></a>

```go
func MemoryPerUnitInput() *f64
```

- *Type:* *f64

---

##### `NumOfUnitsInput`<sup>Optional</sup> <a name="NumOfUnitsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnitsInput"></a>

```go
func NumOfUnitsInput() *f64
```

- *Type:* *f64

---

##### `CpuPerUnit`<sup>Required</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnit"></a>

```go
func CpuPerUnit() *f64
```

- *Type:* *f64

---

##### `GpuPerUnit`<sup>Required</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnit"></a>

```go
func GpuPerUnit() *f64
```

- *Type:* *f64

---

##### `MemoryPerUnit`<sup>Required</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnit"></a>

```go
func MemoryPerUnit() *f64
```

- *Type:* *f64

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnits"></a>

```go
func NumOfUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

---


### OceanAwsAutoscalerOutputReference <a name="OceanAwsAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsAutoscalerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsAutoscalerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown">PutAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom">PutAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits">PutResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoHeadroomPercentage">ResetAutoHeadroomPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleCooldown">ResetAutoscaleCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleDown">ResetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleHeadroom">ResetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsAutoConfig">ResetAutoscaleIsAutoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsEnabled">ResetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom">ResetEnableAutomaticAndManualHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetExtendedResourceDefinitions">ResetExtendedResourceDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetResourceLimits">ResetResourceLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscaleDown` <a name="PutAutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown"></a>

```go
func PutAutoscaleDown(value OceanAwsAutoscalerAutoscaleDown)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

---

##### `PutAutoscaleHeadroom` <a name="PutAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom"></a>

```go
func PutAutoscaleHeadroom(value OceanAwsAutoscalerAutoscaleHeadroom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

---

##### `PutResourceLimits` <a name="PutResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits"></a>

```go
func PutResourceLimits(value OceanAwsAutoscalerResourceLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

---

##### `ResetAutoHeadroomPercentage` <a name="ResetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoHeadroomPercentage"></a>

```go
func ResetAutoHeadroomPercentage()
```

##### `ResetAutoscaleCooldown` <a name="ResetAutoscaleCooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleCooldown"></a>

```go
func ResetAutoscaleCooldown()
```

##### `ResetAutoscaleDown` <a name="ResetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleDown"></a>

```go
func ResetAutoscaleDown()
```

##### `ResetAutoscaleHeadroom` <a name="ResetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleHeadroom"></a>

```go
func ResetAutoscaleHeadroom()
```

##### `ResetAutoscaleIsAutoConfig` <a name="ResetAutoscaleIsAutoConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsAutoConfig"></a>

```go
func ResetAutoscaleIsAutoConfig()
```

##### `ResetAutoscaleIsEnabled` <a name="ResetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsEnabled"></a>

```go
func ResetAutoscaleIsEnabled()
```

##### `ResetEnableAutomaticAndManualHeadroom` <a name="ResetEnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom"></a>

```go
func ResetEnableAutomaticAndManualHeadroom()
```

##### `ResetExtendedResourceDefinitions` <a name="ResetExtendedResourceDefinitions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetExtendedResourceDefinitions"></a>

```go
func ResetExtendedResourceDefinitions()
```

##### `ResetResourceLimits` <a name="ResetResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetResourceLimits"></a>

```go
func ResetResourceLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference">OceanAwsAutoscalerAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference">OceanAwsAutoscalerAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference">OceanAwsAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentageInput">AutoHeadroomPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldownInput">AutoscaleCooldownInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDownInput">AutoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroomInput">AutoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfigInput">AutoscaleIsAutoConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabledInput">AutoscaleIsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput">EnableAutomaticAndManualHeadroomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitionsInput">ExtendedResourceDefinitionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimitsInput">ResourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldown">AutoscaleCooldown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfig">AutoscaleIsAutoConfig</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabled">AutoscaleIsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom">EnableAutomaticAndManualHeadroom</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitions">ExtendedResourceDefinitions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscaleDown`<sup>Required</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDown"></a>

```go
func AutoscaleDown() OceanAwsAutoscalerAutoscaleDownOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference">OceanAwsAutoscalerAutoscaleDownOutputReference</a>

---

##### `AutoscaleHeadroom`<sup>Required</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroom"></a>

```go
func AutoscaleHeadroom() OceanAwsAutoscalerAutoscaleHeadroomOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference">OceanAwsAutoscalerAutoscaleHeadroomOutputReference</a>

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimits"></a>

```go
func ResourceLimits() OceanAwsAutoscalerResourceLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference">OceanAwsAutoscalerResourceLimitsOutputReference</a>

---

##### `AutoHeadroomPercentageInput`<sup>Optional</sup> <a name="AutoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentageInput"></a>

```go
func AutoHeadroomPercentageInput() *f64
```

- *Type:* *f64

---

##### `AutoscaleCooldownInput`<sup>Optional</sup> <a name="AutoscaleCooldownInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldownInput"></a>

```go
func AutoscaleCooldownInput() *f64
```

- *Type:* *f64

---

##### `AutoscaleDownInput`<sup>Optional</sup> <a name="AutoscaleDownInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDownInput"></a>

```go
func AutoscaleDownInput() OceanAwsAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

---

##### `AutoscaleHeadroomInput`<sup>Optional</sup> <a name="AutoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroomInput"></a>

```go
func AutoscaleHeadroomInput() OceanAwsAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

---

##### `AutoscaleIsAutoConfigInput`<sup>Optional</sup> <a name="AutoscaleIsAutoConfigInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfigInput"></a>

```go
func AutoscaleIsAutoConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AutoscaleIsEnabledInput`<sup>Optional</sup> <a name="AutoscaleIsEnabledInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabledInput"></a>

```go
func AutoscaleIsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableAutomaticAndManualHeadroomInput`<sup>Optional</sup> <a name="EnableAutomaticAndManualHeadroomInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput"></a>

```go
func EnableAutomaticAndManualHeadroomInput() interface{}
```

- *Type:* interface{}

---

##### `ExtendedResourceDefinitionsInput`<sup>Optional</sup> <a name="ExtendedResourceDefinitionsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitionsInput"></a>

```go
func ExtendedResourceDefinitionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceLimitsInput`<sup>Optional</sup> <a name="ResourceLimitsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimitsInput"></a>

```go
func ResourceLimitsInput() OceanAwsAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

---

##### `AutoHeadroomPercentage`<sup>Required</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentage"></a>

```go
func AutoHeadroomPercentage() *f64
```

- *Type:* *f64

---

##### `AutoscaleCooldown`<sup>Required</sup> <a name="AutoscaleCooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldown"></a>

```go
func AutoscaleCooldown() *f64
```

- *Type:* *f64

---

##### `AutoscaleIsAutoConfig`<sup>Required</sup> <a name="AutoscaleIsAutoConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfig"></a>

```go
func AutoscaleIsAutoConfig() interface{}
```

- *Type:* interface{}

---

##### `AutoscaleIsEnabled`<sup>Required</sup> <a name="AutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabled"></a>

```go
func AutoscaleIsEnabled() interface{}
```

- *Type:* interface{}

---

##### `EnableAutomaticAndManualHeadroom`<sup>Required</sup> <a name="EnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom"></a>

```go
func EnableAutomaticAndManualHeadroom() interface{}
```

- *Type:* interface{}

---

##### `ExtendedResourceDefinitions`<sup>Required</sup> <a name="ExtendedResourceDefinitions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitions"></a>

```go
func ExtendedResourceDefinitions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

---


### OceanAwsAutoscalerResourceLimitsOutputReference <a name="OceanAwsAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsAutoscalerResourceLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsAutoscalerResourceLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```go
func ResetMaxMemoryGib()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```go
func ResetMaxVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```go
func MaxMemoryGibInput() *f64
```

- *Type:* *f64

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```go
func MaxVcpuInput() *f64
```

- *Type:* *f64

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```go
func MaxMemoryGib() *f64
```

- *Type:* *f64

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```go
func MaxVcpu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

---


### OceanAwsClusterOrientationList <a name="OceanAwsClusterOrientationList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsClusterOrientationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsClusterOrientationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.get"></a>

```go
func Get(index *f64) OceanAwsClusterOrientationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsClusterOrientationOutputReference <a name="OceanAwsClusterOrientationOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsClusterOrientationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsClusterOrientationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resetAvailabilityVsCost">ResetAvailabilityVsCost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityVsCost` <a name="ResetAvailabilityVsCost" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resetAvailabilityVsCost"></a>

```go
func ResetAvailabilityVsCost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCostInput">AvailabilityVsCostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCost">AvailabilityVsCost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityVsCostInput`<sup>Optional</sup> <a name="AvailabilityVsCostInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCostInput"></a>

```go
func AvailabilityVsCostInput() *string
```

- *Type:* *string

---

##### `AvailabilityVsCost`<sup>Required</sup> <a name="AvailabilityVsCost" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCost"></a>

```go
func AvailabilityVsCost() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsFiltersOutputReference <a name="OceanAwsFiltersOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetArchitectures">ResetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetDiskTypes">ResetDiskTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeFamilies">ResetExcludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeMetal">ResetExcludeMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetHypervisor">ResetHypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIncludeFamilies">ResetIncludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIsEnaSupported">ResetIsEnaSupported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxGpu">ResetMaxGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxNetworkPerformance">ResetMaxNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinEnis">ResetMinEnis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinGpu">ResetMinGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinMemoryGib">ResetMinMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinNetworkPerformance">ResetMinNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinVcpu">ResetMinVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetRootDeviceTypes">ResetRootDeviceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetVirtualizationTypes">ResetVirtualizationTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchitectures` <a name="ResetArchitectures" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetArchitectures"></a>

```go
func ResetArchitectures()
```

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetCategories"></a>

```go
func ResetCategories()
```

##### `ResetDiskTypes` <a name="ResetDiskTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetDiskTypes"></a>

```go
func ResetDiskTypes()
```

##### `ResetExcludeFamilies` <a name="ResetExcludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeFamilies"></a>

```go
func ResetExcludeFamilies()
```

##### `ResetExcludeMetal` <a name="ResetExcludeMetal" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeMetal"></a>

```go
func ResetExcludeMetal()
```

##### `ResetHypervisor` <a name="ResetHypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetHypervisor"></a>

```go
func ResetHypervisor()
```

##### `ResetIncludeFamilies` <a name="ResetIncludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIncludeFamilies"></a>

```go
func ResetIncludeFamilies()
```

##### `ResetIsEnaSupported` <a name="ResetIsEnaSupported" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIsEnaSupported"></a>

```go
func ResetIsEnaSupported()
```

##### `ResetMaxGpu` <a name="ResetMaxGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxGpu"></a>

```go
func ResetMaxGpu()
```

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxMemoryGib"></a>

```go
func ResetMaxMemoryGib()
```

##### `ResetMaxNetworkPerformance` <a name="ResetMaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxNetworkPerformance"></a>

```go
func ResetMaxNetworkPerformance()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxVcpu"></a>

```go
func ResetMaxVcpu()
```

##### `ResetMinEnis` <a name="ResetMinEnis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinEnis"></a>

```go
func ResetMinEnis()
```

##### `ResetMinGpu` <a name="ResetMinGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinGpu"></a>

```go
func ResetMinGpu()
```

##### `ResetMinMemoryGib` <a name="ResetMinMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinMemoryGib"></a>

```go
func ResetMinMemoryGib()
```

##### `ResetMinNetworkPerformance` <a name="ResetMinNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinNetworkPerformance"></a>

```go
func ResetMinNetworkPerformance()
```

##### `ResetMinVcpu` <a name="ResetMinVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinVcpu"></a>

```go
func ResetMinVcpu()
```

##### `ResetRootDeviceTypes` <a name="ResetRootDeviceTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetRootDeviceTypes"></a>

```go
func ResetRootDeviceTypes()
```

##### `ResetVirtualizationTypes` <a name="ResetVirtualizationTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetVirtualizationTypes"></a>

```go
func ResetVirtualizationTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architecturesInput">ArchitecturesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categoriesInput">CategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypesInput">DiskTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamiliesInput">ExcludeFamiliesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetalInput">ExcludeMetalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisorInput">HypervisorInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamiliesInput">IncludeFamiliesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupportedInput">IsEnaSupportedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpuInput">MaxGpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformanceInput">MaxNetworkPerformanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnisInput">MinEnisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpuInput">MinGpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGibInput">MinMemoryGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformanceInput">MinNetworkPerformanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpuInput">MinVcpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypesInput">RootDeviceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypesInput">VirtualizationTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architectures">Architectures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categories">Categories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypes">DiskTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamilies">ExcludeFamilies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetal">ExcludeMetal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisor">Hypervisor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamilies">IncludeFamilies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupported">IsEnaSupported</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpu">MaxGpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformance">MaxNetworkPerformance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnis">MinEnis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpu">MinGpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGib">MinMemoryGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformance">MinNetworkPerformance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpu">MinVcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypes">RootDeviceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypes">VirtualizationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchitecturesInput`<sup>Optional</sup> <a name="ArchitecturesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architecturesInput"></a>

```go
func ArchitecturesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categoriesInput"></a>

```go
func CategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DiskTypesInput`<sup>Optional</sup> <a name="DiskTypesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypesInput"></a>

```go
func DiskTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeFamiliesInput`<sup>Optional</sup> <a name="ExcludeFamiliesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamiliesInput"></a>

```go
func ExcludeFamiliesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeMetalInput`<sup>Optional</sup> <a name="ExcludeMetalInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetalInput"></a>

```go
func ExcludeMetalInput() interface{}
```

- *Type:* interface{}

---

##### `HypervisorInput`<sup>Optional</sup> <a name="HypervisorInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisorInput"></a>

```go
func HypervisorInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeFamiliesInput`<sup>Optional</sup> <a name="IncludeFamiliesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamiliesInput"></a>

```go
func IncludeFamiliesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnaSupportedInput`<sup>Optional</sup> <a name="IsEnaSupportedInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupportedInput"></a>

```go
func IsEnaSupportedInput() *string
```

- *Type:* *string

---

##### `MaxGpuInput`<sup>Optional</sup> <a name="MaxGpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpuInput"></a>

```go
func MaxGpuInput() *f64
```

- *Type:* *f64

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGibInput"></a>

```go
func MaxMemoryGibInput() *f64
```

- *Type:* *f64

---

##### `MaxNetworkPerformanceInput`<sup>Optional</sup> <a name="MaxNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformanceInput"></a>

```go
func MaxNetworkPerformanceInput() *f64
```

- *Type:* *f64

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpuInput"></a>

```go
func MaxVcpuInput() *f64
```

- *Type:* *f64

---

##### `MinEnisInput`<sup>Optional</sup> <a name="MinEnisInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnisInput"></a>

```go
func MinEnisInput() *f64
```

- *Type:* *f64

---

##### `MinGpuInput`<sup>Optional</sup> <a name="MinGpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpuInput"></a>

```go
func MinGpuInput() *f64
```

- *Type:* *f64

---

##### `MinMemoryGibInput`<sup>Optional</sup> <a name="MinMemoryGibInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGibInput"></a>

```go
func MinMemoryGibInput() *f64
```

- *Type:* *f64

---

##### `MinNetworkPerformanceInput`<sup>Optional</sup> <a name="MinNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformanceInput"></a>

```go
func MinNetworkPerformanceInput() *f64
```

- *Type:* *f64

---

##### `MinVcpuInput`<sup>Optional</sup> <a name="MinVcpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpuInput"></a>

```go
func MinVcpuInput() *f64
```

- *Type:* *f64

---

##### `RootDeviceTypesInput`<sup>Optional</sup> <a name="RootDeviceTypesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypesInput"></a>

```go
func RootDeviceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualizationTypesInput`<sup>Optional</sup> <a name="VirtualizationTypesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypesInput"></a>

```go
func VirtualizationTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architectures"></a>

```go
func Architectures() *[]*string
```

- *Type:* *[]*string

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categories"></a>

```go
func Categories() *[]*string
```

- *Type:* *[]*string

---

##### `DiskTypes`<sup>Required</sup> <a name="DiskTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypes"></a>

```go
func DiskTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeFamilies`<sup>Required</sup> <a name="ExcludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamilies"></a>

```go
func ExcludeFamilies() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeMetal`<sup>Required</sup> <a name="ExcludeMetal" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetal"></a>

```go
func ExcludeMetal() interface{}
```

- *Type:* interface{}

---

##### `Hypervisor`<sup>Required</sup> <a name="Hypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisor"></a>

```go
func Hypervisor() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeFamilies`<sup>Required</sup> <a name="IncludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamilies"></a>

```go
func IncludeFamilies() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnaSupported`<sup>Required</sup> <a name="IsEnaSupported" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupported"></a>

```go
func IsEnaSupported() *string
```

- *Type:* *string

---

##### `MaxGpu`<sup>Required</sup> <a name="MaxGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpu"></a>

```go
func MaxGpu() *f64
```

- *Type:* *f64

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGib"></a>

```go
func MaxMemoryGib() *f64
```

- *Type:* *f64

---

##### `MaxNetworkPerformance`<sup>Required</sup> <a name="MaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformance"></a>

```go
func MaxNetworkPerformance() *f64
```

- *Type:* *f64

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpu"></a>

```go
func MaxVcpu() *f64
```

- *Type:* *f64

---

##### `MinEnis`<sup>Required</sup> <a name="MinEnis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnis"></a>

```go
func MinEnis() *f64
```

- *Type:* *f64

---

##### `MinGpu`<sup>Required</sup> <a name="MinGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpu"></a>

```go
func MinGpu() *f64
```

- *Type:* *f64

---

##### `MinMemoryGib`<sup>Required</sup> <a name="MinMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGib"></a>

```go
func MinMemoryGib() *f64
```

- *Type:* *f64

---

##### `MinNetworkPerformance`<sup>Required</sup> <a name="MinNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformance"></a>

```go
func MinNetworkPerformance() *f64
```

- *Type:* *f64

---

##### `MinVcpu`<sup>Required</sup> <a name="MinVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpu"></a>

```go
func MinVcpu() *f64
```

- *Type:* *f64

---

##### `RootDeviceTypes`<sup>Required</sup> <a name="RootDeviceTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypes"></a>

```go
func RootDeviceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualizationTypes`<sup>Required</sup> <a name="VirtualizationTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypes"></a>

```go
func VirtualizationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

---


### OceanAwsInstanceMetadataOptionsOutputReference <a name="OceanAwsInstanceMetadataOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsInstanceMetadataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsInstanceMetadataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```go
func ResetHttpPutResponseHopLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```go
func HttpPutResponseHopLimitInput() *f64
```

- *Type:* *f64

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```go
func HttpTokensInput() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

---


### OceanAwsLoadBalancersList <a name="OceanAwsLoadBalancersList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsLoadBalancersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLoadBalancersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.get"></a>

```go
func Get(index *f64) OceanAwsLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLoadBalancersOutputReference <a name="OceanAwsLoadBalancersOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsLoadBalancersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLoadBalancersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetArn"></a>

```go
func ResetArn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLoggingExportOutputReference <a name="OceanAwsLoggingExportOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsLoggingExportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsLoggingExportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.putS3"></a>

```go
func PutS3(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.putS3.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List">OceanAwsLoggingExportS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3"></a>

```go
func S3() OceanAwsLoggingExportS3List
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List">OceanAwsLoggingExportS3List</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsLoggingExport
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

---


### OceanAwsLoggingExportS3List <a name="OceanAwsLoggingExportS3List" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsLoggingExportS3List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLoggingExportS3List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.get"></a>

```go
func Get(index *f64) OceanAwsLoggingExportS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLoggingExportS3OutputReference <a name="OceanAwsLoggingExportS3OutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsLoggingExportS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLoggingExportS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLoggingOutputReference <a name="OceanAwsLoggingOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.putExport">PutExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resetExport">ResetExport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExport` <a name="PutExport" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.putExport"></a>

```go
func PutExport(value OceanAwsLoggingExport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.putExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

---

##### `ResetExport` <a name="ResetExport" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resetExport"></a>

```go
func ResetExport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.export">Export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference">OceanAwsLoggingExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.exportInput">ExportInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.export"></a>

```go
func Export() OceanAwsLoggingExportOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference">OceanAwsLoggingExportOutputReference</a>

---

##### `ExportInput`<sup>Optional</sup> <a name="ExportInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.exportInput"></a>

```go
func ExportInput() OceanAwsLoggingExport
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsLogging
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

---


### OceanAwsScheduledTaskList <a name="OceanAwsScheduledTaskList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsScheduledTaskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsScheduledTaskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.get"></a>

```go
func Get(index *f64) OceanAwsScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsScheduledTaskOutputReference <a name="OceanAwsScheduledTaskOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsScheduledTaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsScheduledTaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours">PutShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putTasks">PutTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetShutdownHours">ResetShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetTasks">ResetTasks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShutdownHours` <a name="PutShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours"></a>

```go
func PutShutdownHours(value OceanAwsScheduledTaskShutdownHours)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

---

##### `PutTasks` <a name="PutTasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putTasks"></a>

```go
func PutTasks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putTasks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetShutdownHours` <a name="ResetShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetShutdownHours"></a>

```go
func ResetShutdownHours()
```

##### `ResetTasks` <a name="ResetTasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetTasks"></a>

```go
func ResetTasks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHours">ShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference">OceanAwsScheduledTaskShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasks">Tasks</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList">OceanAwsScheduledTaskTasksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHoursInput">ShutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasksInput">TasksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShutdownHours`<sup>Required</sup> <a name="ShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHours"></a>

```go
func ShutdownHours() OceanAwsScheduledTaskShutdownHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference">OceanAwsScheduledTaskShutdownHoursOutputReference</a>

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasks"></a>

```go
func Tasks() OceanAwsScheduledTaskTasksList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList">OceanAwsScheduledTaskTasksList</a>

---

##### `ShutdownHoursInput`<sup>Optional</sup> <a name="ShutdownHoursInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHoursInput"></a>

```go
func ShutdownHoursInput() OceanAwsScheduledTaskShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

---

##### `TasksInput`<sup>Optional</sup> <a name="TasksInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasksInput"></a>

```go
func TasksInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsScheduledTaskShutdownHoursOutputReference <a name="OceanAwsScheduledTaskShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsScheduledTaskShutdownHoursOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsScheduledTaskShutdownHoursOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput">TimeWindowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindows">TimeWindows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeWindowsInput`<sup>Optional</sup> <a name="TimeWindowsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput"></a>

```go
func TimeWindowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindows"></a>

```go
func TimeWindows() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsScheduledTaskShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

---


### OceanAwsScheduledTaskTasksList <a name="OceanAwsScheduledTaskTasksList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsScheduledTaskTasksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsScheduledTaskTasksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.get"></a>

```go
func Get(index *f64) OceanAwsScheduledTaskTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsScheduledTaskTasksOutputReference <a name="OceanAwsScheduledTaskTasksOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsScheduledTaskTasksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsScheduledTaskTasksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskType">TaskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpressionInput"></a>

```go
func CronExpressionInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskTypeInput"></a>

```go
func TaskTypeInput() *string
```

- *Type:* *string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskType"></a>

```go
func TaskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsTagsList <a name="OceanAwsTagsList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.get"></a>

```go
func Get(index *f64) OceanAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsTagsOutputReference <a name="OceanAwsTagsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsUpdatePolicyOutputReference <a name="OceanAwsUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig">PutRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetAutoApplyTags">ResetAutoApplyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetConditionedRoll">ResetConditionedRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetRollConfig">ResetRollConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRollConfig` <a name="PutRollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig"></a>

```go
func PutRollConfig(value OceanAwsUpdatePolicyRollConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

---

##### `ResetAutoApplyTags` <a name="ResetAutoApplyTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetAutoApplyTags"></a>

```go
func ResetAutoApplyTags()
```

##### `ResetConditionedRoll` <a name="ResetConditionedRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetConditionedRoll"></a>

```go
func ResetConditionedRoll()
```

##### `ResetRollConfig` <a name="ResetRollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetRollConfig"></a>

```go
func ResetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference">OceanAwsUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTagsInput">AutoApplyTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRollInput">ConditionedRollInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfigInput">RollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRollInput">ShouldRollInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTags">AutoApplyTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRoll">ConditionedRoll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRoll">ShouldRoll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RollConfig`<sup>Required</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfig"></a>

```go
func RollConfig() OceanAwsUpdatePolicyRollConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference">OceanAwsUpdatePolicyRollConfigOutputReference</a>

---

##### `AutoApplyTagsInput`<sup>Optional</sup> <a name="AutoApplyTagsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTagsInput"></a>

```go
func AutoApplyTagsInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionedRollInput`<sup>Optional</sup> <a name="ConditionedRollInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```go
func ConditionedRollInput() interface{}
```

- *Type:* interface{}

---

##### `RollConfigInput`<sup>Optional</sup> <a name="RollConfigInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfigInput"></a>

```go
func RollConfigInput() OceanAwsUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

---

##### `ShouldRollInput`<sup>Optional</sup> <a name="ShouldRollInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRollInput"></a>

```go
func ShouldRollInput() interface{}
```

- *Type:* interface{}

---

##### `AutoApplyTags`<sup>Required</sup> <a name="AutoApplyTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTags"></a>

```go
func AutoApplyTags() interface{}
```

- *Type:* interface{}

---

##### `ConditionedRoll`<sup>Required</sup> <a name="ConditionedRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRoll"></a>

```go
func ConditionedRoll() interface{}
```

- *Type:* interface{}

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRoll"></a>

```go
func ShouldRoll() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

---


### OceanAwsUpdatePolicyRollConfigOutputReference <a name="OceanAwsUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaws"

oceanaws.NewOceanAwsUpdatePolicyRollConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsUpdatePolicyRollConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">ResetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetLaunchSpecIds">ResetLaunchSpecIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetRespectPdb">ResetRespectPdb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchMinHealthyPercentage` <a name="ResetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```go
func ResetBatchMinHealthyPercentage()
```

##### `ResetLaunchSpecIds` <a name="ResetLaunchSpecIds" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetLaunchSpecIds"></a>

```go
func ResetLaunchSpecIds()
```

##### `ResetRespectPdb` <a name="ResetRespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetRespectPdb"></a>

```go
func ResetRespectPdb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">BatchMinHealthyPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIdsInput">LaunchSpecIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdbInput">RespectPdbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIds">LaunchSpecIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdb">RespectPdb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchMinHealthyPercentageInput`<sup>Optional</sup> <a name="BatchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```go
func BatchMinHealthyPercentageInput() *f64
```

- *Type:* *f64

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```go
func BatchSizePercentageInput() *f64
```

- *Type:* *f64

---

##### `LaunchSpecIdsInput`<sup>Optional</sup> <a name="LaunchSpecIdsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIdsInput"></a>

```go
func LaunchSpecIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RespectPdbInput`<sup>Optional</sup> <a name="RespectPdbInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdbInput"></a>

```go
func RespectPdbInput() interface{}
```

- *Type:* interface{}

---

##### `BatchMinHealthyPercentage`<sup>Required</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```go
func BatchMinHealthyPercentage() *f64
```

- *Type:* *f64

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```go
func BatchSizePercentage() *f64
```

- *Type:* *f64

---

##### `LaunchSpecIds`<sup>Required</sup> <a name="LaunchSpecIds" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIds"></a>

```go
func LaunchSpecIds() *[]*string
```

- *Type:* *[]*string

---

##### `RespectPdb`<sup>Required</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdb"></a>

```go
func RespectPdb() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

---



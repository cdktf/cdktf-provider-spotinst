# `oceanAksNp` Submodule <a name="`oceanAksNp` Submodule" id="@cdktf/provider-spotinst.oceanAksNp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAksNp <a name="OceanAksNp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np spotinst_ocean_aks_np}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNp(scope Construct, id *string, config OceanAksNpConfig) OceanAksNp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig">OceanAksNpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig">OceanAksNpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler">PutAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHeadrooms">PutHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth">PutHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putLinuxOsConfig">PutLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putVngTemplateScheduling">PutVngTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAutoscaler">ResetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetEnableNodePublicIp">ResetEnableNodePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFallbackToOndemand">ResetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHeadrooms">ResetHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHealth">ResetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetKubernetesVersion">ResetKubernetesVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLinuxOsConfig">ResetLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxCount">ResetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxPodsPerNode">ResetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMinCount">ResetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskSizeGb">ResetOsDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskType">ResetOsDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsSku">ResetOsSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsType">ResetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetPodSubnetIds">ResetPodSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetSpotPercentage">ResetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTaints">ResetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetVnetSubnetIds">ResetVnetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetVngTemplateScheduling">ResetVngTemplateScheduling</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscaler` <a name="PutAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler"></a>

```go
func PutAutoscaler(value OceanAksNpAutoscaler)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putFilters"></a>

```go
func PutFilters(value OceanAksNpFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

---

##### `PutHeadrooms` <a name="PutHeadrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHeadrooms"></a>

```go
func PutHeadrooms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHeadrooms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHealth` <a name="PutHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth"></a>

```go
func PutHealth(value OceanAksNpHealth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---

##### `PutLinuxOsConfig` <a name="PutLinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putLinuxOsConfig"></a>

```go
func PutLinuxOsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putLinuxOsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putLogging"></a>

```go
func PutLogging(value OceanAksNpLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLogging">OceanAksNpLogging</a>

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putScheduling"></a>

```go
func PutScheduling(value OceanAksNpScheduling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

---

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints"></a>

```go
func PutTaints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putUpdatePolicy"></a>

```go
func PutUpdatePolicy(value OceanAksNpUpdatePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

---

##### `PutVngTemplateScheduling` <a name="PutVngTemplateScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putVngTemplateScheduling"></a>

```go
func PutVngTemplateScheduling(value OceanAksNpVngTemplateScheduling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putVngTemplateScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateScheduling">OceanAksNpVngTemplateScheduling</a>

---

##### `ResetAutoscaler` <a name="ResetAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAutoscaler"></a>

```go
func ResetAutoscaler()
```

##### `ResetEnableNodePublicIp` <a name="ResetEnableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetEnableNodePublicIp"></a>

```go
func ResetEnableNodePublicIp()
```

##### `ResetFallbackToOndemand` <a name="ResetFallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFallbackToOndemand"></a>

```go
func ResetFallbackToOndemand()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetHeadrooms` <a name="ResetHeadrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHeadrooms"></a>

```go
func ResetHeadrooms()
```

##### `ResetHealth` <a name="ResetHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHealth"></a>

```go
func ResetHealth()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetId"></a>

```go
func ResetId()
```

##### `ResetKubernetesVersion` <a name="ResetKubernetesVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetKubernetesVersion"></a>

```go
func ResetKubernetesVersion()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLinuxOsConfig` <a name="ResetLinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLinuxOsConfig"></a>

```go
func ResetLinuxOsConfig()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetMaxCount` <a name="ResetMaxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxCount"></a>

```go
func ResetMaxCount()
```

##### `ResetMaxPodsPerNode` <a name="ResetMaxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxPodsPerNode"></a>

```go
func ResetMaxPodsPerNode()
```

##### `ResetMinCount` <a name="ResetMinCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMinCount"></a>

```go
func ResetMinCount()
```

##### `ResetOsDiskSizeGb` <a name="ResetOsDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskSizeGb"></a>

```go
func ResetOsDiskSizeGb()
```

##### `ResetOsDiskType` <a name="ResetOsDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskType"></a>

```go
func ResetOsDiskType()
```

##### `ResetOsSku` <a name="ResetOsSku" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsSku"></a>

```go
func ResetOsSku()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsType"></a>

```go
func ResetOsType()
```

##### `ResetPodSubnetIds` <a name="ResetPodSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetPodSubnetIds"></a>

```go
func ResetPodSubnetIds()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetScheduling"></a>

```go
func ResetScheduling()
```

##### `ResetSpotPercentage` <a name="ResetSpotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetSpotPercentage"></a>

```go
func ResetSpotPercentage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTaints"></a>

```go
func ResetTaints()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetUpdatePolicy"></a>

```go
func ResetUpdatePolicy()
```

##### `ResetVnetSubnetIds` <a name="ResetVnetSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetVnetSubnetIds"></a>

```go
func ResetVnetSubnetIds()
```

##### `ResetVngTemplateScheduling` <a name="ResetVngTemplateScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetVngTemplateScheduling"></a>

```go
func ResetVngTemplateScheduling()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceanAksNp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.OceanAksNp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.OceanAksNp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.OceanAksNp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.OceanAksNp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OceanAksNp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OceanAksNp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OceanAksNp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OceanAksNp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference">OceanAksNpAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference">OceanAksNpFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.headrooms">Headrooms</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList">OceanAksNpHeadroomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.health">Health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference">OceanAksNpHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.linuxOsConfig">LinuxOsConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList">OceanAksNpLinuxOsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference">OceanAksNpLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference">OceanAksNpSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList">OceanAksNpTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference">OceanAksNpUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vngTemplateScheduling">VngTemplateScheduling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference">OceanAksNpVngTemplateSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterNameInput">AksClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupNameInput">AksInfrastructureResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegionInput">AksRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupNameInput">AksResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscalerInput">AutoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterIdInput">ControllerClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIpInput">EnableNodePublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemandInput">FallbackToOndemandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.headroomsInput">HeadroomsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.healthInput">HealthInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.kubernetesVersionInput">KubernetesVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.linuxOsConfigInput">LinuxOsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLogging">OceanAksNpLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCountInput">MaxCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNodeInput">MaxPodsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCountInput">MinCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGbInput">OsDiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskTypeInput">OsDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osSkuInput">OsSkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.podSubnetIdsInput">PodSubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentageInput">SpotPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taintsInput">TaintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vnetSubnetIdsInput">VnetSubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vngTemplateSchedulingInput">VngTemplateSchedulingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateScheduling">OceanAksNpVngTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterName">AksClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupName">AksInfrastructureResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegion">AksRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupName">AksResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterId">ControllerClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIp">EnableNodePublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.kubernetesVersion">KubernetesVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCount">MaxCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCount">MinCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGb">OsDiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskType">OsDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osSku">OsSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.podSubnetIds">PodSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentage">SpotPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vnetSubnetIds">VnetSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autoscaler`<sup>Required</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscaler"></a>

```go
func Autoscaler() OceanAksNpAutoscalerOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference">OceanAksNpAutoscalerOutputReference</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.filters"></a>

```go
func Filters() OceanAksNpFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference">OceanAksNpFiltersOutputReference</a>

---

##### `Headrooms`<sup>Required</sup> <a name="Headrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.headrooms"></a>

```go
func Headrooms() OceanAksNpHeadroomsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList">OceanAksNpHeadroomsList</a>

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.health"></a>

```go
func Health() OceanAksNpHealthOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference">OceanAksNpHealthOutputReference</a>

---

##### `LinuxOsConfig`<sup>Required</sup> <a name="LinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.linuxOsConfig"></a>

```go
func LinuxOsConfig() OceanAksNpLinuxOsConfigList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList">OceanAksNpLinuxOsConfigList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.logging"></a>

```go
func Logging() OceanAksNpLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference">OceanAksNpLoggingOutputReference</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.scheduling"></a>

```go
func Scheduling() OceanAksNpSchedulingOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference">OceanAksNpSchedulingOutputReference</a>

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taints"></a>

```go
func Taints() OceanAksNpTaintsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList">OceanAksNpTaintsList</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.updatePolicy"></a>

```go
func UpdatePolicy() OceanAksNpUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference">OceanAksNpUpdatePolicyOutputReference</a>

---

##### `VngTemplateScheduling`<sup>Required</sup> <a name="VngTemplateScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vngTemplateScheduling"></a>

```go
func VngTemplateScheduling() OceanAksNpVngTemplateSchedulingOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference">OceanAksNpVngTemplateSchedulingOutputReference</a>

---

##### `AksClusterNameInput`<sup>Optional</sup> <a name="AksClusterNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterNameInput"></a>

```go
func AksClusterNameInput() *string
```

- *Type:* *string

---

##### `AksInfrastructureResourceGroupNameInput`<sup>Optional</sup> <a name="AksInfrastructureResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupNameInput"></a>

```go
func AksInfrastructureResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `AksRegionInput`<sup>Optional</sup> <a name="AksRegionInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegionInput"></a>

```go
func AksRegionInput() *string
```

- *Type:* *string

---

##### `AksResourceGroupNameInput`<sup>Optional</sup> <a name="AksResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupNameInput"></a>

```go
func AksResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `AutoscalerInput`<sup>Optional</sup> <a name="AutoscalerInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscalerInput"></a>

```go
func AutoscalerInput() OceanAksNpAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ControllerClusterIdInput`<sup>Optional</sup> <a name="ControllerClusterIdInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterIdInput"></a>

```go
func ControllerClusterIdInput() *string
```

- *Type:* *string

---

##### `EnableNodePublicIpInput`<sup>Optional</sup> <a name="EnableNodePublicIpInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIpInput"></a>

```go
func EnableNodePublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `FallbackToOndemandInput`<sup>Optional</sup> <a name="FallbackToOndemandInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemandInput"></a>

```go
func FallbackToOndemandInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.filtersInput"></a>

```go
func FiltersInput() OceanAksNpFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

---

##### `HeadroomsInput`<sup>Optional</sup> <a name="HeadroomsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.headroomsInput"></a>

```go
func HeadroomsInput() interface{}
```

- *Type:* interface{}

---

##### `HealthInput`<sup>Optional</sup> <a name="HealthInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.healthInput"></a>

```go
func HealthInput() OceanAksNpHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesVersionInput`<sup>Optional</sup> <a name="KubernetesVersionInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.kubernetesVersionInput"></a>

```go
func KubernetesVersionInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LinuxOsConfigInput`<sup>Optional</sup> <a name="LinuxOsConfigInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.linuxOsConfigInput"></a>

```go
func LinuxOsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.loggingInput"></a>

```go
func LoggingInput() OceanAksNpLogging
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLogging">OceanAksNpLogging</a>

---

##### `MaxCountInput`<sup>Optional</sup> <a name="MaxCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCountInput"></a>

```go
func MaxCountInput() *f64
```

- *Type:* *f64

---

##### `MaxPodsPerNodeInput`<sup>Optional</sup> <a name="MaxPodsPerNodeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNodeInput"></a>

```go
func MaxPodsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `MinCountInput`<sup>Optional</sup> <a name="MinCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCountInput"></a>

```go
func MinCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsDiskSizeGbInput`<sup>Optional</sup> <a name="OsDiskSizeGbInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGbInput"></a>

```go
func OsDiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `OsDiskTypeInput`<sup>Optional</sup> <a name="OsDiskTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskTypeInput"></a>

```go
func OsDiskTypeInput() *string
```

- *Type:* *string

---

##### `OsSkuInput`<sup>Optional</sup> <a name="OsSkuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osSkuInput"></a>

```go
func OsSkuInput() *string
```

- *Type:* *string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `PodSubnetIdsInput`<sup>Optional</sup> <a name="PodSubnetIdsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.podSubnetIdsInput"></a>

```go
func PodSubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.schedulingInput"></a>

```go
func SchedulingInput() OceanAksNpScheduling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

---

##### `SpotPercentageInput`<sup>Optional</sup> <a name="SpotPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentageInput"></a>

```go
func SpotPercentageInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taintsInput"></a>

```go
func TaintsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.updatePolicyInput"></a>

```go
func UpdatePolicyInput() OceanAksNpUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

---

##### `VnetSubnetIdsInput`<sup>Optional</sup> <a name="VnetSubnetIdsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vnetSubnetIdsInput"></a>

```go
func VnetSubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VngTemplateSchedulingInput`<sup>Optional</sup> <a name="VngTemplateSchedulingInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vngTemplateSchedulingInput"></a>

```go
func VngTemplateSchedulingInput() OceanAksNpVngTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateScheduling">OceanAksNpVngTemplateScheduling</a>

---

##### `AksClusterName`<sup>Required</sup> <a name="AksClusterName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterName"></a>

```go
func AksClusterName() *string
```

- *Type:* *string

---

##### `AksInfrastructureResourceGroupName`<sup>Required</sup> <a name="AksInfrastructureResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupName"></a>

```go
func AksInfrastructureResourceGroupName() *string
```

- *Type:* *string

---

##### `AksRegion`<sup>Required</sup> <a name="AksRegion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegion"></a>

```go
func AksRegion() *string
```

- *Type:* *string

---

##### `AksResourceGroupName`<sup>Required</sup> <a name="AksResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupName"></a>

```go
func AksResourceGroupName() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `ControllerClusterId`<sup>Required</sup> <a name="ControllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterId"></a>

```go
func ControllerClusterId() *string
```

- *Type:* *string

---

##### `EnableNodePublicIp`<sup>Required</sup> <a name="EnableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIp"></a>

```go
func EnableNodePublicIp() interface{}
```

- *Type:* interface{}

---

##### `FallbackToOndemand`<sup>Required</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemand"></a>

```go
func FallbackToOndemand() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.kubernetesVersion"></a>

```go
func KubernetesVersion() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCount"></a>

```go
func MaxCount() *f64
```

- *Type:* *f64

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNode"></a>

```go
func MaxPodsPerNode() *f64
```

- *Type:* *f64

---

##### `MinCount`<sup>Required</sup> <a name="MinCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCount"></a>

```go
func MinCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsDiskSizeGb`<sup>Required</sup> <a name="OsDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGb"></a>

```go
func OsDiskSizeGb() *f64
```

- *Type:* *f64

---

##### `OsDiskType`<sup>Required</sup> <a name="OsDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskType"></a>

```go
func OsDiskType() *string
```

- *Type:* *string

---

##### `OsSku`<sup>Required</sup> <a name="OsSku" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osSku"></a>

```go
func OsSku() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `PodSubnetIds`<sup>Required</sup> <a name="PodSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.podSubnetIds"></a>

```go
func PodSubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `SpotPercentage`<sup>Required</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentage"></a>

```go
func SpotPercentage() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VnetSubnetIds`<sup>Required</sup> <a name="VnetSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vnetSubnetIds"></a>

```go
func VnetSubnetIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAksNpAutoscaler <a name="OceanAksNpAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpAutoscaler {
	AutoscaleDown: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown,
	AutoscaleHeadroom: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom,
	AutoscaleIsEnabled: interface{},
	ResourceLimits: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpAutoscalerResourceLimits,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleIsEnabled">AutoscaleIsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#autoscale_is_enabled OceanAksNp#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `AutoscaleDown`<sup>Optional</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleDown"></a>

```go
AutoscaleDown OceanAksNpAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#autoscale_down OceanAksNp#autoscale_down}

---

##### `AutoscaleHeadroom`<sup>Optional</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleHeadroom"></a>

```go
AutoscaleHeadroom OceanAksNpAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#autoscale_headroom OceanAksNp#autoscale_headroom}

---

##### `AutoscaleIsEnabled`<sup>Optional</sup> <a name="AutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleIsEnabled"></a>

```go
AutoscaleIsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#autoscale_is_enabled OceanAksNp#autoscale_is_enabled}.

---

##### `ResourceLimits`<sup>Optional</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.resourceLimits"></a>

```go
ResourceLimits OceanAksNpAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#resource_limits OceanAksNp#resource_limits}

---

### OceanAksNpAutoscalerAutoscaleDown <a name="OceanAksNpAutoscalerAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpAutoscalerAutoscaleDown {
	MaxScaleDownPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_scale_down_percentage OceanAksNp#max_scale_down_percentage}. |

---

##### `MaxScaleDownPercentage`<sup>Optional</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.property.maxScaleDownPercentage"></a>

```go
MaxScaleDownPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_scale_down_percentage OceanAksNp#max_scale_down_percentage}.

---

### OceanAksNpAutoscalerAutoscaleHeadroom <a name="OceanAksNpAutoscalerAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpAutoscalerAutoscaleHeadroom {
	Automatic: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.property.automatic">Automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | automatic block. |

---

##### `Automatic`<sup>Optional</sup> <a name="Automatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.property.automatic"></a>

```go
Automatic OceanAksNpAutoscalerAutoscaleHeadroomAutomatic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#automatic OceanAksNp#automatic}

---

### OceanAksNpAutoscalerAutoscaleHeadroomAutomatic <a name="OceanAksNpAutoscalerAutoscaleHeadroomAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic {
	IsEnabled: interface{},
	Percentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.percentage">Percentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#percentage OceanAksNp#percentage}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.percentage"></a>

```go
Percentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#percentage OceanAksNp#percentage}.

---

### OceanAksNpAutoscalerResourceLimits <a name="OceanAksNpAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpAutoscalerResourceLimits {
	MaxMemoryGib: *f64,
	MaxVcpu: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}. |

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxMemoryGib"></a>

```go
MaxMemoryGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxVcpu"></a>

```go
MaxVcpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}.

---

### OceanAksNpConfig <a name="OceanAksNpConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AksClusterName: *string,
	AksInfrastructureResourceGroupName: *string,
	AksRegion: *string,
	AksResourceGroupName: *string,
	AvailabilityZones: *[]*string,
	ControllerClusterId: *string,
	Name: *string,
	Autoscaler: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpAutoscaler,
	EnableNodePublicIp: interface{},
	FallbackToOndemand: interface{},
	Filters: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpFilters,
	Headrooms: interface{},
	Health: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpHealth,
	Id: *string,
	KubernetesVersion: *string,
	Labels: *map[string]*string,
	LinuxOsConfig: interface{},
	Logging: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpLogging,
	MaxCount: *f64,
	MaxPodsPerNode: *f64,
	MinCount: *f64,
	OsDiskSizeGb: *f64,
	OsDiskType: *string,
	OsSku: *string,
	OsType: *string,
	PodSubnetIds: *[]*string,
	Scheduling: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpScheduling,
	SpotPercentage: *f64,
	Tags: *map[string]*string,
	Taints: interface{},
	UpdatePolicy: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpUpdatePolicy,
	VnetSubnetIds: *[]*string,
	VngTemplateScheduling: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpVngTemplateScheduling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksClusterName">AksClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksInfrastructureResourceGroupName">AksInfrastructureResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksRegion">AksRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#aks_region OceanAksNp#aks_region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksResourceGroupName">AksResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#availability_zones OceanAksNp#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.controllerClusterId">ControllerClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#name OceanAksNp#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.enableNodePublicIp">EnableNodePublicIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.headrooms">Headrooms</a></code> | <code>interface{}</code> | headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.health">Health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#id OceanAksNp#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.kubernetesVersion">KubernetesVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#kubernetes_version OceanAksNp#kubernetes_version}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#labels OceanAksNp#labels}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.linuxOsConfig">LinuxOsConfig</a></code> | <code>interface{}</code> | linux_os_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLogging">OceanAksNpLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxCount">MaxCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_count OceanAksNp#max_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.minCount">MinCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#min_count OceanAksNp#min_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskSizeGb">OsDiskSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskType">OsDiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osSku">OsSku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#os_sku OceanAksNp#os_sku}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osType">OsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#os_type OceanAksNp#os_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.podSubnetIds">PodSubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#pod_subnet_ids OceanAksNp#pod_subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.spotPercentage">SpotPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#tags OceanAksNp#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.taints">Taints</a></code> | <code>interface{}</code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.vnetSubnetIds">VnetSubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#vnet_subnet_ids OceanAksNp#vnet_subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.vngTemplateScheduling">VngTemplateScheduling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateScheduling">OceanAksNpVngTemplateScheduling</a></code> | vng_template_scheduling block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AksClusterName`<sup>Required</sup> <a name="AksClusterName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksClusterName"></a>

```go
AksClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}.

---

##### `AksInfrastructureResourceGroupName`<sup>Required</sup> <a name="AksInfrastructureResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksInfrastructureResourceGroupName"></a>

```go
AksInfrastructureResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}.

---

##### `AksRegion`<sup>Required</sup> <a name="AksRegion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksRegion"></a>

```go
AksRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#aks_region OceanAksNp#aks_region}.

---

##### `AksResourceGroupName`<sup>Required</sup> <a name="AksResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksResourceGroupName"></a>

```go
AksResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}.

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#availability_zones OceanAksNp#availability_zones}.

---

##### `ControllerClusterId`<sup>Required</sup> <a name="ControllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.controllerClusterId"></a>

```go
ControllerClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#name OceanAksNp#name}.

---

##### `Autoscaler`<sup>Optional</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.autoscaler"></a>

```go
Autoscaler OceanAksNpAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#autoscaler OceanAksNp#autoscaler}

---

##### `EnableNodePublicIp`<sup>Optional</sup> <a name="EnableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.enableNodePublicIp"></a>

```go
EnableNodePublicIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}.

---

##### `FallbackToOndemand`<sup>Optional</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.fallbackToOndemand"></a>

```go
FallbackToOndemand interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.filters"></a>

```go
Filters OceanAksNpFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#filters OceanAksNp#filters}

---

##### `Headrooms`<sup>Optional</sup> <a name="Headrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.headrooms"></a>

```go
Headrooms interface{}
```

- *Type:* interface{}

headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#headrooms OceanAksNp#headrooms}

---

##### `Health`<sup>Optional</sup> <a name="Health" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.health"></a>

```go
Health OceanAksNpHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#health OceanAksNp#health}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#id OceanAksNp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubernetesVersion`<sup>Optional</sup> <a name="KubernetesVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.kubernetesVersion"></a>

```go
KubernetesVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#kubernetes_version OceanAksNp#kubernetes_version}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#labels OceanAksNp#labels}.

---

##### `LinuxOsConfig`<sup>Optional</sup> <a name="LinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.linuxOsConfig"></a>

```go
LinuxOsConfig interface{}
```

- *Type:* interface{}

linux_os_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#linux_os_config OceanAksNp#linux_os_config}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.logging"></a>

```go
Logging OceanAksNpLogging
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLogging">OceanAksNpLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#logging OceanAksNp#logging}

---

##### `MaxCount`<sup>Optional</sup> <a name="MaxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxCount"></a>

```go
MaxCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_count OceanAksNp#max_count}.

---

##### `MaxPodsPerNode`<sup>Optional</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxPodsPerNode"></a>

```go
MaxPodsPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}.

---

##### `MinCount`<sup>Optional</sup> <a name="MinCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.minCount"></a>

```go
MinCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#min_count OceanAksNp#min_count}.

---

##### `OsDiskSizeGb`<sup>Optional</sup> <a name="OsDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskSizeGb"></a>

```go
OsDiskSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}.

---

##### `OsDiskType`<sup>Optional</sup> <a name="OsDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskType"></a>

```go
OsDiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}.

---

##### `OsSku`<sup>Optional</sup> <a name="OsSku" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osSku"></a>

```go
OsSku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#os_sku OceanAksNp#os_sku}.

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#os_type OceanAksNp#os_type}.

---

##### `PodSubnetIds`<sup>Optional</sup> <a name="PodSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.podSubnetIds"></a>

```go
PodSubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#pod_subnet_ids OceanAksNp#pod_subnet_ids}.

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.scheduling"></a>

```go
Scheduling OceanAksNpScheduling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#scheduling OceanAksNp#scheduling}

---

##### `SpotPercentage`<sup>Optional</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.spotPercentage"></a>

```go
SpotPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#tags OceanAksNp#tags}.

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.taints"></a>

```go
Taints interface{}
```

- *Type:* interface{}

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#taints OceanAksNp#taints}

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.updatePolicy"></a>

```go
UpdatePolicy OceanAksNpUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#update_policy OceanAksNp#update_policy}

---

##### `VnetSubnetIds`<sup>Optional</sup> <a name="VnetSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.vnetSubnetIds"></a>

```go
VnetSubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#vnet_subnet_ids OceanAksNp#vnet_subnet_ids}.

---

##### `VngTemplateScheduling`<sup>Optional</sup> <a name="VngTemplateScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.vngTemplateScheduling"></a>

```go
VngTemplateScheduling OceanAksNpVngTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateScheduling">OceanAksNpVngTemplateScheduling</a>

vng_template_scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#vng_template_scheduling OceanAksNp#vng_template_scheduling}

---

### OceanAksNpFilters <a name="OceanAksNpFilters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpFilters {
	AcceleratedNetworking: *string,
	Architectures: *[]*string,
	DiskPerformance: *string,
	ExcludeSeries: *[]*string,
	GpuTypes: *[]*string,
	MaxGpu: *f64,
	MaxMemoryGib: *f64,
	MaxVcpu: *f64,
	MinDisk: *f64,
	MinGpu: *f64,
	MinMemoryGib: *f64,
	MinNics: *f64,
	MinVcpu: *f64,
	Series: *[]*string,
	VmTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.acceleratedNetworking">AcceleratedNetworking</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#accelerated_networking OceanAksNp#accelerated_networking}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.architectures">Architectures</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#architectures OceanAksNp#architectures}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.diskPerformance">DiskPerformance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#disk_performance OceanAksNp#disk_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.excludeSeries">ExcludeSeries</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#exclude_series OceanAksNp#exclude_series}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.gpuTypes">GpuTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#gpu_types OceanAksNp#gpu_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxGpu">MaxGpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_gpu OceanAksNp#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minDisk">MinDisk</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#min_disk OceanAksNp#min_disk}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minGpu">MinGpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#min_gpu OceanAksNp#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minMemoryGib">MinMemoryGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#min_memory_gib OceanAksNp#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minNics">MinNics</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#min_nics OceanAksNp#min_nics}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minVcpu">MinVcpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#min_vcpu OceanAksNp#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.series">Series</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#series OceanAksNp#series}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.vmTypes">VmTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#vm_types OceanAksNp#vm_types}. |

---

##### `AcceleratedNetworking`<sup>Optional</sup> <a name="AcceleratedNetworking" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.acceleratedNetworking"></a>

```go
AcceleratedNetworking *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#accelerated_networking OceanAksNp#accelerated_networking}.

---

##### `Architectures`<sup>Optional</sup> <a name="Architectures" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.architectures"></a>

```go
Architectures *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#architectures OceanAksNp#architectures}.

---

##### `DiskPerformance`<sup>Optional</sup> <a name="DiskPerformance" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.diskPerformance"></a>

```go
DiskPerformance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#disk_performance OceanAksNp#disk_performance}.

---

##### `ExcludeSeries`<sup>Optional</sup> <a name="ExcludeSeries" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.excludeSeries"></a>

```go
ExcludeSeries *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#exclude_series OceanAksNp#exclude_series}.

---

##### `GpuTypes`<sup>Optional</sup> <a name="GpuTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.gpuTypes"></a>

```go
GpuTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#gpu_types OceanAksNp#gpu_types}.

---

##### `MaxGpu`<sup>Optional</sup> <a name="MaxGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxGpu"></a>

```go
MaxGpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_gpu OceanAksNp#max_gpu}.

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxMemoryGib"></a>

```go
MaxMemoryGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxVcpu"></a>

```go
MaxVcpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}.

---

##### `MinDisk`<sup>Optional</sup> <a name="MinDisk" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minDisk"></a>

```go
MinDisk *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#min_disk OceanAksNp#min_disk}.

---

##### `MinGpu`<sup>Optional</sup> <a name="MinGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minGpu"></a>

```go
MinGpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#min_gpu OceanAksNp#min_gpu}.

---

##### `MinMemoryGib`<sup>Optional</sup> <a name="MinMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minMemoryGib"></a>

```go
MinMemoryGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#min_memory_gib OceanAksNp#min_memory_gib}.

---

##### `MinNics`<sup>Optional</sup> <a name="MinNics" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minNics"></a>

```go
MinNics *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#min_nics OceanAksNp#min_nics}.

---

##### `MinVcpu`<sup>Optional</sup> <a name="MinVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minVcpu"></a>

```go
MinVcpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#min_vcpu OceanAksNp#min_vcpu}.

---

##### `Series`<sup>Optional</sup> <a name="Series" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.series"></a>

```go
Series *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#series OceanAksNp#series}.

---

##### `VmTypes`<sup>Optional</sup> <a name="VmTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.vmTypes"></a>

```go
VmTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#vm_types OceanAksNp#vm_types}.

---

### OceanAksNpHeadrooms <a name="OceanAksNpHeadrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpHeadrooms {
	CpuPerUnit: *f64,
	GpuPerUnit: *f64,
	MemoryPerUnit: *f64,
	NumOfUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.cpuPerUnit">CpuPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#cpu_per_unit OceanAksNp#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.gpuPerUnit">GpuPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#gpu_per_unit OceanAksNp#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#memory_per_unit OceanAksNp#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.numOfUnits">NumOfUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#num_of_units OceanAksNp#num_of_units}. |

---

##### `CpuPerUnit`<sup>Optional</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.cpuPerUnit"></a>

```go
CpuPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#cpu_per_unit OceanAksNp#cpu_per_unit}.

---

##### `GpuPerUnit`<sup>Optional</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.gpuPerUnit"></a>

```go
GpuPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#gpu_per_unit OceanAksNp#gpu_per_unit}.

---

##### `MemoryPerUnit`<sup>Optional</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.memoryPerUnit"></a>

```go
MemoryPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#memory_per_unit OceanAksNp#memory_per_unit}.

---

##### `NumOfUnits`<sup>Optional</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.numOfUnits"></a>

```go
NumOfUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#num_of_units OceanAksNp#num_of_units}.

---

### OceanAksNpHealth <a name="OceanAksNpHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpHealth {
	GracePeriod: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#grace_period OceanAksNp#grace_period}. |

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.property.gracePeriod"></a>

```go
GracePeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#grace_period OceanAksNp#grace_period}.

---

### OceanAksNpLinuxOsConfig <a name="OceanAksNpLinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpLinuxOsConfig {
	Sysctls: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig.property.sysctls">Sysctls</a></code> | <code>interface{}</code> | sysctls block. |

---

##### `Sysctls`<sup>Optional</sup> <a name="Sysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig.property.sysctls"></a>

```go
Sysctls interface{}
```

- *Type:* interface{}

sysctls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#sysctls OceanAksNp#sysctls}

---

### OceanAksNpLinuxOsConfigSysctls <a name="OceanAksNpLinuxOsConfigSysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpLinuxOsConfigSysctls {
	VmMaxMapCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls.property.vmMaxMapCount">VmMaxMapCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#vm_max_map_count OceanAksNp#vm_max_map_count}. |

---

##### `VmMaxMapCount`<sup>Optional</sup> <a name="VmMaxMapCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls.property.vmMaxMapCount"></a>

```go
VmMaxMapCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#vm_max_map_count OceanAksNp#vm_max_map_count}.

---

### OceanAksNpLogging <a name="OceanAksNpLogging" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpLogging {
	Export: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpLoggingExport,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLogging.property.export">Export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExport">OceanAksNpLoggingExport</a></code> | export block. |

---

##### `Export`<sup>Optional</sup> <a name="Export" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLogging.property.export"></a>

```go
Export OceanAksNpLoggingExport
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExport">OceanAksNpLoggingExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#export OceanAksNp#export}

---

### OceanAksNpLoggingExport <a name="OceanAksNpLoggingExport" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpLoggingExport {
	AzureBlob: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExport.property.azureBlob">AzureBlob</a></code> | <code>interface{}</code> | azure_blob block. |

---

##### `AzureBlob`<sup>Optional</sup> <a name="AzureBlob" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExport.property.azureBlob"></a>

```go
AzureBlob interface{}
```

- *Type:* interface{}

azure_blob block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#azure_blob OceanAksNp#azure_blob}

---

### OceanAksNpLoggingExportAzureBlob <a name="OceanAksNpLoggingExportAzureBlob" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpLoggingExportAzureBlob {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlob.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#id OceanAksNp#id}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlob.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#id OceanAksNp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OceanAksNpScheduling <a name="OceanAksNpScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpScheduling {
	ShutdownHours: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpSchedulingShutdownHours,
	SuspensionHours: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpSchedulingSuspensionHours,
	Tasks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.shutdownHours">ShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a></code> | shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.suspensionHours">SuspensionHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours">OceanAksNpSchedulingSuspensionHours</a></code> | suspension_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.tasks">Tasks</a></code> | <code>interface{}</code> | tasks block. |

---

##### `ShutdownHours`<sup>Optional</sup> <a name="ShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.shutdownHours"></a>

```go
ShutdownHours OceanAksNpSchedulingShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#shutdown_hours OceanAksNp#shutdown_hours}

---

##### `SuspensionHours`<sup>Optional</sup> <a name="SuspensionHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.suspensionHours"></a>

```go
SuspensionHours OceanAksNpSchedulingSuspensionHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours">OceanAksNpSchedulingSuspensionHours</a>

suspension_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#suspension_hours OceanAksNp#suspension_hours}

---

##### `Tasks`<sup>Optional</sup> <a name="Tasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.tasks"></a>

```go
Tasks interface{}
```

- *Type:* interface{}

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#tasks OceanAksNp#tasks}

---

### OceanAksNpSchedulingShutdownHours <a name="OceanAksNpSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpSchedulingShutdownHours {
	IsEnabled: interface{},
	TimeWindows: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.property.timeWindows">TimeWindows</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `TimeWindows`<sup>Optional</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.property.timeWindows"></a>

```go
TimeWindows *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}.

---

### OceanAksNpSchedulingSuspensionHours <a name="OceanAksNpSchedulingSuspensionHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpSchedulingSuspensionHours {
	IsEnabled: interface{},
	TimeWindows: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours.property.timeWindows">TimeWindows</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `TimeWindows`<sup>Optional</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours.property.timeWindows"></a>

```go
TimeWindows *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}.

---

### OceanAksNpSchedulingTasks <a name="OceanAksNpSchedulingTasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpSchedulingTasks {
	CronExpression: *string,
	IsEnabled: interface{},
	TaskType: *string,
	Parameters: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpSchedulingTasksParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.cronExpression">CronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#cron_expression OceanAksNp#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.taskType">TaskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#task_type OceanAksNp#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a></code> | parameters block. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.cronExpression"></a>

```go
CronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#cron_expression OceanAksNp#cron_expression}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.taskType"></a>

```go
TaskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#task_type OceanAksNp#task_type}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.parameters"></a>

```go
Parameters OceanAksNpSchedulingTasksParameters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#parameters OceanAksNp#parameters}

---

### OceanAksNpSchedulingTasksParameters <a name="OceanAksNpSchedulingTasksParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpSchedulingTasksParameters {
	ParametersClusterRoll: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll,
	ParametersUpgradeConfig: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters.property.parametersClusterRoll">ParametersClusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a></code> | parameters_cluster_roll block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters.property.parametersUpgradeConfig">ParametersUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig">OceanAksNpSchedulingTasksParametersParametersUpgradeConfig</a></code> | parameters_upgrade_config block. |

---

##### `ParametersClusterRoll`<sup>Optional</sup> <a name="ParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters.property.parametersClusterRoll"></a>

```go
ParametersClusterRoll OceanAksNpSchedulingTasksParametersParametersClusterRoll
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a>

parameters_cluster_roll block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#parameters_cluster_roll OceanAksNp#parameters_cluster_roll}

---

##### `ParametersUpgradeConfig`<sup>Optional</sup> <a name="ParametersUpgradeConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters.property.parametersUpgradeConfig"></a>

```go
ParametersUpgradeConfig OceanAksNpSchedulingTasksParametersParametersUpgradeConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig">OceanAksNpSchedulingTasksParametersParametersUpgradeConfig</a>

parameters_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#parameters_upgrade_config OceanAksNp#parameters_upgrade_config}

---

### OceanAksNpSchedulingTasksParametersParametersClusterRoll <a name="OceanAksNpSchedulingTasksParametersParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpSchedulingTasksParametersParametersClusterRoll {
	BatchMinHealthyPercentage: *f64,
	BatchSizePercentage: *f64,
	Comment: *string,
	RespectPdb: interface{},
	RespectRestrictScaleDown: interface{},
	VngIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#comment OceanAksNp#comment}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.respectPdb">RespectPdb</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.respectRestrictScaleDown">RespectRestrictScaleDown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.vngIds">VngIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}. |

---

##### `BatchMinHealthyPercentage`<sup>Optional</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.batchMinHealthyPercentage"></a>

```go
BatchMinHealthyPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}.

---

##### `BatchSizePercentage`<sup>Optional</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.batchSizePercentage"></a>

```go
BatchSizePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#comment OceanAksNp#comment}.

---

##### `RespectPdb`<sup>Optional</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.respectPdb"></a>

```go
RespectPdb interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}.

---

##### `RespectRestrictScaleDown`<sup>Optional</sup> <a name="RespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.respectRestrictScaleDown"></a>

```go
RespectRestrictScaleDown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}.

---

##### `VngIds`<sup>Optional</sup> <a name="VngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.vngIds"></a>

```go
VngIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}.

---

### OceanAksNpSchedulingTasksParametersParametersUpgradeConfig <a name="OceanAksNpSchedulingTasksParametersParametersUpgradeConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig {
	ApplyRoll: interface{},
	RollParameters: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters,
	ScopeVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig.property.applyRoll">ApplyRoll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#apply_roll OceanAksNp#apply_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig.property.rollParameters">RollParameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters">OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters</a></code> | roll_parameters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig.property.scopeVersion">ScopeVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#scope_version OceanAksNp#scope_version}. |

---

##### `ApplyRoll`<sup>Optional</sup> <a name="ApplyRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig.property.applyRoll"></a>

```go
ApplyRoll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#apply_roll OceanAksNp#apply_roll}.

---

##### `RollParameters`<sup>Optional</sup> <a name="RollParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig.property.rollParameters"></a>

```go
RollParameters OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters">OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters</a>

roll_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#roll_parameters OceanAksNp#roll_parameters}

---

##### `ScopeVersion`<sup>Optional</sup> <a name="ScopeVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig.property.scopeVersion"></a>

```go
ScopeVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#scope_version OceanAksNp#scope_version}.

---

### OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters <a name="OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters {
	BatchMinHealthyPercentage: *f64,
	BatchSizePercentage: *f64,
	Comment: *string,
	RespectPdb: interface{},
	RespectRestrictScaleDown: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#comment OceanAksNp#comment}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters.property.respectPdb">RespectPdb</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters.property.respectRestrictScaleDown">RespectRestrictScaleDown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}. |

---

##### `BatchMinHealthyPercentage`<sup>Optional</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters.property.batchMinHealthyPercentage"></a>

```go
BatchMinHealthyPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}.

---

##### `BatchSizePercentage`<sup>Optional</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters.property.batchSizePercentage"></a>

```go
BatchSizePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#comment OceanAksNp#comment}.

---

##### `RespectPdb`<sup>Optional</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters.property.respectPdb"></a>

```go
RespectPdb interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}.

---

##### `RespectRestrictScaleDown`<sup>Optional</sup> <a name="RespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters.property.respectRestrictScaleDown"></a>

```go
RespectRestrictScaleDown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}.

---

### OceanAksNpTaints <a name="OceanAksNpTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpTaints {
	Effect: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.effect">Effect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#effect OceanAksNp#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#key OceanAksNp#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#value OceanAksNp#value}. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#effect OceanAksNp#effect}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#key OceanAksNp#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#value OceanAksNp#value}.

---

### OceanAksNpUpdatePolicy <a name="OceanAksNpUpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpUpdatePolicy {
	ShouldRoll: interface{},
	ConditionedRoll: interface{},
	RollConfig: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpUpdatePolicyRollConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.shouldRoll">ShouldRoll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#should_roll OceanAksNp#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.conditionedRoll">ConditionedRoll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#conditioned_roll OceanAksNp#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.shouldRoll"></a>

```go
ShouldRoll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#should_roll OceanAksNp#should_roll}.

---

##### `ConditionedRoll`<sup>Optional</sup> <a name="ConditionedRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.conditionedRoll"></a>

```go
ConditionedRoll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#conditioned_roll OceanAksNp#conditioned_roll}.

---

##### `RollConfig`<sup>Optional</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.rollConfig"></a>

```go
RollConfig OceanAksNpUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#roll_config OceanAksNp#roll_config}

---

### OceanAksNpUpdatePolicyRollConfig <a name="OceanAksNpUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpUpdatePolicyRollConfig {
	BatchMinHealthyPercentage: *f64,
	BatchSizePercentage: *f64,
	Comment: *string,
	NodeNames: *[]*string,
	NodePoolNames: *[]*string,
	RespectPdb: interface{},
	RespectRestrictScaleDown: interface{},
	VngIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#comment OceanAksNp#comment}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.nodeNames">NodeNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#node_names OceanAksNp#node_names}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.nodePoolNames">NodePoolNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#node_pool_names OceanAksNp#node_pool_names}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.respectPdb">RespectPdb</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.respectRestrictScaleDown">RespectRestrictScaleDown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.vngIds">VngIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}. |

---

##### `BatchMinHealthyPercentage`<sup>Optional</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```go
BatchMinHealthyPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}.

---

##### `BatchSizePercentage`<sup>Optional</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```go
BatchSizePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#comment OceanAksNp#comment}.

---

##### `NodeNames`<sup>Optional</sup> <a name="NodeNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.nodeNames"></a>

```go
NodeNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#node_names OceanAksNp#node_names}.

---

##### `NodePoolNames`<sup>Optional</sup> <a name="NodePoolNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.nodePoolNames"></a>

```go
NodePoolNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#node_pool_names OceanAksNp#node_pool_names}.

---

##### `RespectPdb`<sup>Optional</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.respectPdb"></a>

```go
RespectPdb interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}.

---

##### `RespectRestrictScaleDown`<sup>Optional</sup> <a name="RespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.respectRestrictScaleDown"></a>

```go
RespectRestrictScaleDown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}.

---

##### `VngIds`<sup>Optional</sup> <a name="VngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.vngIds"></a>

```go
VngIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}.

---

### OceanAksNpVngTemplateScheduling <a name="OceanAksNpVngTemplateScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateScheduling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpVngTemplateScheduling {
	VngTemplateShutdownHours: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateScheduling.property.vngTemplateShutdownHours">VngTemplateShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours">OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours</a></code> | vng_template_shutdown_hours block. |

---

##### `VngTemplateShutdownHours`<sup>Optional</sup> <a name="VngTemplateShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateScheduling.property.vngTemplateShutdownHours"></a>

```go
VngTemplateShutdownHours OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours">OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours</a>

vng_template_shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#vng_template_shutdown_hours OceanAksNp#vng_template_shutdown_hours}

---

### OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours <a name="OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

&oceanaksnp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours {
	IsEnabled: interface{},
	TimeWindows: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours.property.timeWindows">TimeWindows</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `TimeWindows`<sup>Optional</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours.property.timeWindows"></a>

```go
TimeWindows *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAksNpAutoscalerAutoscaleDownOutputReference <a name="OceanAksNpAutoscalerAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpAutoscalerAutoscaleDownOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpAutoscalerAutoscaleDownOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage">ResetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxScaleDownPercentage` <a name="ResetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```go
func ResetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">MaxScaleDownPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxScaleDownPercentageInput`<sup>Optional</sup> <a name="MaxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```go
func MaxScaleDownPercentageInput() *f64
```

- *Type:* *f64

---

##### `MaxScaleDownPercentage`<sup>Required</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```go
func MaxScaleDownPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---


### OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference <a name="OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage"></a>

```go
func ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput">PercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput"></a>

```go
func PercentageInput() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpAutoscalerAutoscaleHeadroomAutomatic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---


### OceanAksNpAutoscalerAutoscaleHeadroomOutputReference <a name="OceanAksNpAutoscalerAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpAutoscalerAutoscaleHeadroomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpAutoscalerAutoscaleHeadroomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic">PutAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic">ResetAutomatic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomatic` <a name="PutAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic"></a>

```go
func PutAutomatic(value OceanAksNpAutoscalerAutoscaleHeadroomAutomatic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `ResetAutomatic` <a name="ResetAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic"></a>

```go
func ResetAutomatic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automatic">Automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput">AutomaticInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automatic"></a>

```go
func Automatic() OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference</a>

---

##### `AutomaticInput`<sup>Optional</sup> <a name="AutomaticInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput"></a>

```go
func AutomaticInput() OceanAksNpAutoscalerAutoscaleHeadroomAutomatic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---


### OceanAksNpAutoscalerOutputReference <a name="OceanAksNpAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpAutoscalerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpAutoscalerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown">PutAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom">PutAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits">PutResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleDown">ResetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleHeadroom">ResetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleIsEnabled">ResetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetResourceLimits">ResetResourceLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscaleDown` <a name="PutAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown"></a>

```go
func PutAutoscaleDown(value OceanAksNpAutoscalerAutoscaleDown)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---

##### `PutAutoscaleHeadroom` <a name="PutAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom"></a>

```go
func PutAutoscaleHeadroom(value OceanAksNpAutoscalerAutoscaleHeadroom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---

##### `PutResourceLimits` <a name="PutResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits"></a>

```go
func PutResourceLimits(value OceanAksNpAutoscalerResourceLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---

##### `ResetAutoscaleDown` <a name="ResetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleDown"></a>

```go
func ResetAutoscaleDown()
```

##### `ResetAutoscaleHeadroom` <a name="ResetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleHeadroom"></a>

```go
func ResetAutoscaleHeadroom()
```

##### `ResetAutoscaleIsEnabled` <a name="ResetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleIsEnabled"></a>

```go
func ResetAutoscaleIsEnabled()
```

##### `ResetResourceLimits` <a name="ResetResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetResourceLimits"></a>

```go
func ResetResourceLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference">OceanAksNpAutoscalerAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference">OceanAksNpAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDownInput">AutoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroomInput">AutoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabledInput">AutoscaleIsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimitsInput">ResourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabled">AutoscaleIsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscaleDown`<sup>Required</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDown"></a>

```go
func AutoscaleDown() OceanAksNpAutoscalerAutoscaleDownOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference">OceanAksNpAutoscalerAutoscaleDownOutputReference</a>

---

##### `AutoscaleHeadroom`<sup>Required</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroom"></a>

```go
func AutoscaleHeadroom() OceanAksNpAutoscalerAutoscaleHeadroomOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomOutputReference</a>

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimits"></a>

```go
func ResourceLimits() OceanAksNpAutoscalerResourceLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference">OceanAksNpAutoscalerResourceLimitsOutputReference</a>

---

##### `AutoscaleDownInput`<sup>Optional</sup> <a name="AutoscaleDownInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDownInput"></a>

```go
func AutoscaleDownInput() OceanAksNpAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---

##### `AutoscaleHeadroomInput`<sup>Optional</sup> <a name="AutoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroomInput"></a>

```go
func AutoscaleHeadroomInput() OceanAksNpAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---

##### `AutoscaleIsEnabledInput`<sup>Optional</sup> <a name="AutoscaleIsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabledInput"></a>

```go
func AutoscaleIsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceLimitsInput`<sup>Optional</sup> <a name="ResourceLimitsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimitsInput"></a>

```go
func ResourceLimitsInput() OceanAksNpAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---

##### `AutoscaleIsEnabled`<sup>Required</sup> <a name="AutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabled"></a>

```go
func AutoscaleIsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---


### OceanAksNpAutoscalerResourceLimitsOutputReference <a name="OceanAksNpAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpAutoscalerResourceLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpAutoscalerResourceLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```go
func ResetMaxMemoryGib()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```go
func ResetMaxVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```go
func MaxMemoryGibInput() *f64
```

- *Type:* *f64

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```go
func MaxVcpuInput() *f64
```

- *Type:* *f64

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```go
func MaxMemoryGib() *f64
```

- *Type:* *f64

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```go
func MaxVcpu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---


### OceanAksNpFiltersOutputReference <a name="OceanAksNpFiltersOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetAcceleratedNetworking">ResetAcceleratedNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetArchitectures">ResetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetDiskPerformance">ResetDiskPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetExcludeSeries">ResetExcludeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetGpuTypes">ResetGpuTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxGpu">ResetMaxGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinDisk">ResetMinDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinGpu">ResetMinGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinMemoryGib">ResetMinMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinNics">ResetMinNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinVcpu">ResetMinVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetSeries">ResetSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetVmTypes">ResetVmTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratedNetworking` <a name="ResetAcceleratedNetworking" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetAcceleratedNetworking"></a>

```go
func ResetAcceleratedNetworking()
```

##### `ResetArchitectures` <a name="ResetArchitectures" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetArchitectures"></a>

```go
func ResetArchitectures()
```

##### `ResetDiskPerformance` <a name="ResetDiskPerformance" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetDiskPerformance"></a>

```go
func ResetDiskPerformance()
```

##### `ResetExcludeSeries` <a name="ResetExcludeSeries" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetExcludeSeries"></a>

```go
func ResetExcludeSeries()
```

##### `ResetGpuTypes` <a name="ResetGpuTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetGpuTypes"></a>

```go
func ResetGpuTypes()
```

##### `ResetMaxGpu` <a name="ResetMaxGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxGpu"></a>

```go
func ResetMaxGpu()
```

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxMemoryGib"></a>

```go
func ResetMaxMemoryGib()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxVcpu"></a>

```go
func ResetMaxVcpu()
```

##### `ResetMinDisk` <a name="ResetMinDisk" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinDisk"></a>

```go
func ResetMinDisk()
```

##### `ResetMinGpu` <a name="ResetMinGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinGpu"></a>

```go
func ResetMinGpu()
```

##### `ResetMinMemoryGib` <a name="ResetMinMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinMemoryGib"></a>

```go
func ResetMinMemoryGib()
```

##### `ResetMinNics` <a name="ResetMinNics" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinNics"></a>

```go
func ResetMinNics()
```

##### `ResetMinVcpu` <a name="ResetMinVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinVcpu"></a>

```go
func ResetMinVcpu()
```

##### `ResetSeries` <a name="ResetSeries" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetSeries"></a>

```go
func ResetSeries()
```

##### `ResetVmTypes` <a name="ResetVmTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetVmTypes"></a>

```go
func ResetVmTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.acceleratedNetworkingInput">AcceleratedNetworkingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.architecturesInput">ArchitecturesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.diskPerformanceInput">DiskPerformanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.excludeSeriesInput">ExcludeSeriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.gpuTypesInput">GpuTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxGpuInput">MaxGpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minDiskInput">MinDiskInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minGpuInput">MinGpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minMemoryGibInput">MinMemoryGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minNicsInput">MinNicsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minVcpuInput">MinVcpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.seriesInput">SeriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.vmTypesInput">VmTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.acceleratedNetworking">AcceleratedNetworking</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.architectures">Architectures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.diskPerformance">DiskPerformance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.excludeSeries">ExcludeSeries</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.gpuTypes">GpuTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxGpu">MaxGpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minDisk">MinDisk</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minGpu">MinGpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minMemoryGib">MinMemoryGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minNics">MinNics</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minVcpu">MinVcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.series">Series</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.vmTypes">VmTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratedNetworkingInput`<sup>Optional</sup> <a name="AcceleratedNetworkingInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.acceleratedNetworkingInput"></a>

```go
func AcceleratedNetworkingInput() *string
```

- *Type:* *string

---

##### `ArchitecturesInput`<sup>Optional</sup> <a name="ArchitecturesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.architecturesInput"></a>

```go
func ArchitecturesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DiskPerformanceInput`<sup>Optional</sup> <a name="DiskPerformanceInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.diskPerformanceInput"></a>

```go
func DiskPerformanceInput() *string
```

- *Type:* *string

---

##### `ExcludeSeriesInput`<sup>Optional</sup> <a name="ExcludeSeriesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.excludeSeriesInput"></a>

```go
func ExcludeSeriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `GpuTypesInput`<sup>Optional</sup> <a name="GpuTypesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.gpuTypesInput"></a>

```go
func GpuTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxGpuInput`<sup>Optional</sup> <a name="MaxGpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxGpuInput"></a>

```go
func MaxGpuInput() *f64
```

- *Type:* *f64

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxMemoryGibInput"></a>

```go
func MaxMemoryGibInput() *f64
```

- *Type:* *f64

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxVcpuInput"></a>

```go
func MaxVcpuInput() *f64
```

- *Type:* *f64

---

##### `MinDiskInput`<sup>Optional</sup> <a name="MinDiskInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minDiskInput"></a>

```go
func MinDiskInput() *f64
```

- *Type:* *f64

---

##### `MinGpuInput`<sup>Optional</sup> <a name="MinGpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minGpuInput"></a>

```go
func MinGpuInput() *f64
```

- *Type:* *f64

---

##### `MinMemoryGibInput`<sup>Optional</sup> <a name="MinMemoryGibInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minMemoryGibInput"></a>

```go
func MinMemoryGibInput() *f64
```

- *Type:* *f64

---

##### `MinNicsInput`<sup>Optional</sup> <a name="MinNicsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minNicsInput"></a>

```go
func MinNicsInput() *f64
```

- *Type:* *f64

---

##### `MinVcpuInput`<sup>Optional</sup> <a name="MinVcpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minVcpuInput"></a>

```go
func MinVcpuInput() *f64
```

- *Type:* *f64

---

##### `SeriesInput`<sup>Optional</sup> <a name="SeriesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.seriesInput"></a>

```go
func SeriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VmTypesInput`<sup>Optional</sup> <a name="VmTypesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.vmTypesInput"></a>

```go
func VmTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratedNetworking`<sup>Required</sup> <a name="AcceleratedNetworking" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.acceleratedNetworking"></a>

```go
func AcceleratedNetworking() *string
```

- *Type:* *string

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.architectures"></a>

```go
func Architectures() *[]*string
```

- *Type:* *[]*string

---

##### `DiskPerformance`<sup>Required</sup> <a name="DiskPerformance" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.diskPerformance"></a>

```go
func DiskPerformance() *string
```

- *Type:* *string

---

##### `ExcludeSeries`<sup>Required</sup> <a name="ExcludeSeries" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.excludeSeries"></a>

```go
func ExcludeSeries() *[]*string
```

- *Type:* *[]*string

---

##### `GpuTypes`<sup>Required</sup> <a name="GpuTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.gpuTypes"></a>

```go
func GpuTypes() *[]*string
```

- *Type:* *[]*string

---

##### `MaxGpu`<sup>Required</sup> <a name="MaxGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxGpu"></a>

```go
func MaxGpu() *f64
```

- *Type:* *f64

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxMemoryGib"></a>

```go
func MaxMemoryGib() *f64
```

- *Type:* *f64

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxVcpu"></a>

```go
func MaxVcpu() *f64
```

- *Type:* *f64

---

##### `MinDisk`<sup>Required</sup> <a name="MinDisk" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minDisk"></a>

```go
func MinDisk() *f64
```

- *Type:* *f64

---

##### `MinGpu`<sup>Required</sup> <a name="MinGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minGpu"></a>

```go
func MinGpu() *f64
```

- *Type:* *f64

---

##### `MinMemoryGib`<sup>Required</sup> <a name="MinMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minMemoryGib"></a>

```go
func MinMemoryGib() *f64
```

- *Type:* *f64

---

##### `MinNics`<sup>Required</sup> <a name="MinNics" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minNics"></a>

```go
func MinNics() *f64
```

- *Type:* *f64

---

##### `MinVcpu`<sup>Required</sup> <a name="MinVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minVcpu"></a>

```go
func MinVcpu() *f64
```

- *Type:* *f64

---

##### `Series`<sup>Required</sup> <a name="Series" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.series"></a>

```go
func Series() *[]*string
```

- *Type:* *[]*string

---

##### `VmTypes`<sup>Required</sup> <a name="VmTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.vmTypes"></a>

```go
func VmTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

---


### OceanAksNpHeadroomsList <a name="OceanAksNpHeadroomsList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpHeadroomsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksNpHeadroomsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.get"></a>

```go
func Get(index *f64) OceanAksNpHeadroomsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpHeadroomsOutputReference <a name="OceanAksNpHeadroomsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpHeadroomsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksNpHeadroomsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetCpuPerUnit">ResetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetGpuPerUnit">ResetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetMemoryPerUnit">ResetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetNumOfUnits">ResetNumOfUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPerUnit` <a name="ResetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetCpuPerUnit"></a>

```go
func ResetCpuPerUnit()
```

##### `ResetGpuPerUnit` <a name="ResetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetGpuPerUnit"></a>

```go
func ResetGpuPerUnit()
```

##### `ResetMemoryPerUnit` <a name="ResetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetMemoryPerUnit"></a>

```go
func ResetMemoryPerUnit()
```

##### `ResetNumOfUnits` <a name="ResetNumOfUnits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetNumOfUnits"></a>

```go
func ResetNumOfUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.cpuPerUnitInput">CpuPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.gpuPerUnitInput">GpuPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.memoryPerUnitInput">MemoryPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.numOfUnitsInput">NumOfUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.cpuPerUnit">CpuPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.gpuPerUnit">GpuPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.numOfUnits">NumOfUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuPerUnitInput`<sup>Optional</sup> <a name="CpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.cpuPerUnitInput"></a>

```go
func CpuPerUnitInput() *f64
```

- *Type:* *f64

---

##### `GpuPerUnitInput`<sup>Optional</sup> <a name="GpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.gpuPerUnitInput"></a>

```go
func GpuPerUnitInput() *f64
```

- *Type:* *f64

---

##### `MemoryPerUnitInput`<sup>Optional</sup> <a name="MemoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.memoryPerUnitInput"></a>

```go
func MemoryPerUnitInput() *f64
```

- *Type:* *f64

---

##### `NumOfUnitsInput`<sup>Optional</sup> <a name="NumOfUnitsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.numOfUnitsInput"></a>

```go
func NumOfUnitsInput() *f64
```

- *Type:* *f64

---

##### `CpuPerUnit`<sup>Required</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.cpuPerUnit"></a>

```go
func CpuPerUnit() *f64
```

- *Type:* *f64

---

##### `GpuPerUnit`<sup>Required</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.gpuPerUnit"></a>

```go
func GpuPerUnit() *f64
```

- *Type:* *f64

---

##### `MemoryPerUnit`<sup>Required</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.memoryPerUnit"></a>

```go
func MemoryPerUnit() *f64
```

- *Type:* *f64

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.numOfUnits"></a>

```go
func NumOfUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpHealthOutputReference <a name="OceanAksNpHealthOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpHealthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpHealthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resetGracePeriod"></a>

```go
func ResetGracePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriodInput"></a>

```go
func GracePeriodInput() *f64
```

- *Type:* *f64

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriod"></a>

```go
func GracePeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---


### OceanAksNpLinuxOsConfigList <a name="OceanAksNpLinuxOsConfigList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpLinuxOsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksNpLinuxOsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.get"></a>

```go
func Get(index *f64) OceanAksNpLinuxOsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpLinuxOsConfigOutputReference <a name="OceanAksNpLinuxOsConfigOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpLinuxOsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksNpLinuxOsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.putSysctls">PutSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resetSysctls">ResetSysctls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSysctls` <a name="PutSysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.putSysctls"></a>

```go
func PutSysctls(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.putSysctls.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSysctls` <a name="ResetSysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resetSysctls"></a>

```go
func ResetSysctls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.sysctls">Sysctls</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList">OceanAksNpLinuxOsConfigSysctlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.sysctlsInput">SysctlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sysctls`<sup>Required</sup> <a name="Sysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.sysctls"></a>

```go
func Sysctls() OceanAksNpLinuxOsConfigSysctlsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList">OceanAksNpLinuxOsConfigSysctlsList</a>

---

##### `SysctlsInput`<sup>Optional</sup> <a name="SysctlsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.sysctlsInput"></a>

```go
func SysctlsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpLinuxOsConfigSysctlsList <a name="OceanAksNpLinuxOsConfigSysctlsList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpLinuxOsConfigSysctlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksNpLinuxOsConfigSysctlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.get"></a>

```go
func Get(index *f64) OceanAksNpLinuxOsConfigSysctlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpLinuxOsConfigSysctlsOutputReference <a name="OceanAksNpLinuxOsConfigSysctlsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpLinuxOsConfigSysctlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksNpLinuxOsConfigSysctlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resetVmMaxMapCount">ResetVmMaxMapCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVmMaxMapCount` <a name="ResetVmMaxMapCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resetVmMaxMapCount"></a>

```go
func ResetVmMaxMapCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCountInput">VmMaxMapCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCount">VmMaxMapCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VmMaxMapCountInput`<sup>Optional</sup> <a name="VmMaxMapCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCountInput"></a>

```go
func VmMaxMapCountInput() *f64
```

- *Type:* *f64

---

##### `VmMaxMapCount`<sup>Required</sup> <a name="VmMaxMapCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCount"></a>

```go
func VmMaxMapCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpLoggingExportAzureBlobList <a name="OceanAksNpLoggingExportAzureBlobList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpLoggingExportAzureBlobList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksNpLoggingExportAzureBlobList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.get"></a>

```go
func Get(index *f64) OceanAksNpLoggingExportAzureBlobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpLoggingExportAzureBlobOutputReference <a name="OceanAksNpLoggingExportAzureBlobOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpLoggingExportAzureBlobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksNpLoggingExportAzureBlobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpLoggingExportOutputReference <a name="OceanAksNpLoggingExportOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpLoggingExportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpLoggingExportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.putAzureBlob">PutAzureBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.resetAzureBlob">ResetAzureBlob</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzureBlob` <a name="PutAzureBlob" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.putAzureBlob"></a>

```go
func PutAzureBlob(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.putAzureBlob.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAzureBlob` <a name="ResetAzureBlob" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.resetAzureBlob"></a>

```go
func ResetAzureBlob()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.property.azureBlob">AzureBlob</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList">OceanAksNpLoggingExportAzureBlobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.property.azureBlobInput">AzureBlobInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExport">OceanAksNpLoggingExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureBlob`<sup>Required</sup> <a name="AzureBlob" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.property.azureBlob"></a>

```go
func AzureBlob() OceanAksNpLoggingExportAzureBlobList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportAzureBlobList">OceanAksNpLoggingExportAzureBlobList</a>

---

##### `AzureBlobInput`<sup>Optional</sup> <a name="AzureBlobInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.property.azureBlobInput"></a>

```go
func AzureBlobInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpLoggingExport
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExport">OceanAksNpLoggingExport</a>

---


### OceanAksNpLoggingOutputReference <a name="OceanAksNpLoggingOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.putExport">PutExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.resetExport">ResetExport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExport` <a name="PutExport" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.putExport"></a>

```go
func PutExport(value OceanAksNpLoggingExport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.putExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExport">OceanAksNpLoggingExport</a>

---

##### `ResetExport` <a name="ResetExport" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.resetExport"></a>

```go
func ResetExport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.property.export">Export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference">OceanAksNpLoggingExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.property.exportInput">ExportInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExport">OceanAksNpLoggingExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLogging">OceanAksNpLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.property.export"></a>

```go
func Export() OceanAksNpLoggingExportOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExportOutputReference">OceanAksNpLoggingExportOutputReference</a>

---

##### `ExportInput`<sup>Optional</sup> <a name="ExportInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.property.exportInput"></a>

```go
func ExportInput() OceanAksNpLoggingExport
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingExport">OceanAksNpLoggingExport</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpLogging
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLogging">OceanAksNpLogging</a>

---


### OceanAksNpSchedulingOutputReference <a name="OceanAksNpSchedulingOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpSchedulingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpSchedulingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putShutdownHours">PutShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putSuspensionHours">PutSuspensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putTasks">PutTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetShutdownHours">ResetShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetSuspensionHours">ResetSuspensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetTasks">ResetTasks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShutdownHours` <a name="PutShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putShutdownHours"></a>

```go
func PutShutdownHours(value OceanAksNpSchedulingShutdownHours)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a>

---

##### `PutSuspensionHours` <a name="PutSuspensionHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putSuspensionHours"></a>

```go
func PutSuspensionHours(value OceanAksNpSchedulingSuspensionHours)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putSuspensionHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours">OceanAksNpSchedulingSuspensionHours</a>

---

##### `PutTasks` <a name="PutTasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putTasks"></a>

```go
func PutTasks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putTasks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetShutdownHours` <a name="ResetShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetShutdownHours"></a>

```go
func ResetShutdownHours()
```

##### `ResetSuspensionHours` <a name="ResetSuspensionHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetSuspensionHours"></a>

```go
func ResetSuspensionHours()
```

##### `ResetTasks` <a name="ResetTasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetTasks"></a>

```go
func ResetTasks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.shutdownHours">ShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference">OceanAksNpSchedulingShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.suspensionHours">SuspensionHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference">OceanAksNpSchedulingSuspensionHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.tasks">Tasks</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList">OceanAksNpSchedulingTasksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.shutdownHoursInput">ShutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.suspensionHoursInput">SuspensionHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours">OceanAksNpSchedulingSuspensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.tasksInput">TasksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShutdownHours`<sup>Required</sup> <a name="ShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.shutdownHours"></a>

```go
func ShutdownHours() OceanAksNpSchedulingShutdownHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference">OceanAksNpSchedulingShutdownHoursOutputReference</a>

---

##### `SuspensionHours`<sup>Required</sup> <a name="SuspensionHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.suspensionHours"></a>

```go
func SuspensionHours() OceanAksNpSchedulingSuspensionHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference">OceanAksNpSchedulingSuspensionHoursOutputReference</a>

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.tasks"></a>

```go
func Tasks() OceanAksNpSchedulingTasksList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList">OceanAksNpSchedulingTasksList</a>

---

##### `ShutdownHoursInput`<sup>Optional</sup> <a name="ShutdownHoursInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.shutdownHoursInput"></a>

```go
func ShutdownHoursInput() OceanAksNpSchedulingShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a>

---

##### `SuspensionHoursInput`<sup>Optional</sup> <a name="SuspensionHoursInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.suspensionHoursInput"></a>

```go
func SuspensionHoursInput() OceanAksNpSchedulingSuspensionHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours">OceanAksNpSchedulingSuspensionHours</a>

---

##### `TasksInput`<sup>Optional</sup> <a name="TasksInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.tasksInput"></a>

```go
func TasksInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpScheduling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

---


### OceanAksNpSchedulingShutdownHoursOutputReference <a name="OceanAksNpSchedulingShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpSchedulingShutdownHoursOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpSchedulingShutdownHoursOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resetTimeWindows">ResetTimeWindows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetTimeWindows` <a name="ResetTimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resetTimeWindows"></a>

```go
func ResetTimeWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.timeWindowsInput">TimeWindowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.timeWindows">TimeWindows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeWindowsInput`<sup>Optional</sup> <a name="TimeWindowsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.timeWindowsInput"></a>

```go
func TimeWindowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.timeWindows"></a>

```go
func TimeWindows() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpSchedulingShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a>

---


### OceanAksNpSchedulingSuspensionHoursOutputReference <a name="OceanAksNpSchedulingSuspensionHoursOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpSchedulingSuspensionHoursOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpSchedulingSuspensionHoursOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.resetTimeWindows">ResetTimeWindows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetTimeWindows` <a name="ResetTimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.resetTimeWindows"></a>

```go
func ResetTimeWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.timeWindowsInput">TimeWindowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.timeWindows">TimeWindows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours">OceanAksNpSchedulingSuspensionHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeWindowsInput`<sup>Optional</sup> <a name="TimeWindowsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.timeWindowsInput"></a>

```go
func TimeWindowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.timeWindows"></a>

```go
func TimeWindows() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHoursOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpSchedulingSuspensionHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingSuspensionHours">OceanAksNpSchedulingSuspensionHours</a>

---


### OceanAksNpSchedulingTasksList <a name="OceanAksNpSchedulingTasksList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpSchedulingTasksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksNpSchedulingTasksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.get"></a>

```go
func Get(index *f64) OceanAksNpSchedulingTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpSchedulingTasksOutputReference <a name="OceanAksNpSchedulingTasksOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpSchedulingTasksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksNpSchedulingTasksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.putParameters"></a>

```go
func PutParameters(value OceanAksNpSchedulingTasksParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a>

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference">OceanAksNpSchedulingTasksParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.parametersInput">ParametersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.taskType">TaskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.parameters"></a>

```go
func Parameters() OceanAksNpSchedulingTasksParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference">OceanAksNpSchedulingTasksParametersOutputReference</a>

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.cronExpressionInput"></a>

```go
func CronExpressionInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.parametersInput"></a>

```go
func ParametersInput() OceanAksNpSchedulingTasksParameters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a>

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.taskTypeInput"></a>

```go
func TaskTypeInput() *string
```

- *Type:* *string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.taskType"></a>

```go
func TaskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpSchedulingTasksParametersOutputReference <a name="OceanAksNpSchedulingTasksParametersOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpSchedulingTasksParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpSchedulingTasksParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.putParametersClusterRoll">PutParametersClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.putParametersUpgradeConfig">PutParametersUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resetParametersClusterRoll">ResetParametersClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resetParametersUpgradeConfig">ResetParametersUpgradeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParametersClusterRoll` <a name="PutParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.putParametersClusterRoll"></a>

```go
func PutParametersClusterRoll(value OceanAksNpSchedulingTasksParametersParametersClusterRoll)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.putParametersClusterRoll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a>

---

##### `PutParametersUpgradeConfig` <a name="PutParametersUpgradeConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.putParametersUpgradeConfig"></a>

```go
func PutParametersUpgradeConfig(value OceanAksNpSchedulingTasksParametersParametersUpgradeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.putParametersUpgradeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig">OceanAksNpSchedulingTasksParametersParametersUpgradeConfig</a>

---

##### `ResetParametersClusterRoll` <a name="ResetParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resetParametersClusterRoll"></a>

```go
func ResetParametersClusterRoll()
```

##### `ResetParametersUpgradeConfig` <a name="ResetParametersUpgradeConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resetParametersUpgradeConfig"></a>

```go
func ResetParametersUpgradeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersClusterRoll">ParametersClusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference">OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersUpgradeConfig">ParametersUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference">OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersClusterRollInput">ParametersClusterRollInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersUpgradeConfigInput">ParametersUpgradeConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig">OceanAksNpSchedulingTasksParametersParametersUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParametersClusterRoll`<sup>Required</sup> <a name="ParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersClusterRoll"></a>

```go
func ParametersClusterRoll() OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference">OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference</a>

---

##### `ParametersUpgradeConfig`<sup>Required</sup> <a name="ParametersUpgradeConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersUpgradeConfig"></a>

```go
func ParametersUpgradeConfig() OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference">OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference</a>

---

##### `ParametersClusterRollInput`<sup>Optional</sup> <a name="ParametersClusterRollInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersClusterRollInput"></a>

```go
func ParametersClusterRollInput() OceanAksNpSchedulingTasksParametersParametersClusterRoll
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a>

---

##### `ParametersUpgradeConfigInput`<sup>Optional</sup> <a name="ParametersUpgradeConfigInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersUpgradeConfigInput"></a>

```go
func ParametersUpgradeConfigInput() OceanAksNpSchedulingTasksParametersParametersUpgradeConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig">OceanAksNpSchedulingTasksParametersParametersUpgradeConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpSchedulingTasksParameters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a>

---


### OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference <a name="OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetBatchMinHealthyPercentage">ResetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetBatchSizePercentage">ResetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetRespectPdb">ResetRespectPdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetRespectRestrictScaleDown">ResetRespectRestrictScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetVngIds">ResetVngIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchMinHealthyPercentage` <a name="ResetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetBatchMinHealthyPercentage"></a>

```go
func ResetBatchMinHealthyPercentage()
```

##### `ResetBatchSizePercentage` <a name="ResetBatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetBatchSizePercentage"></a>

```go
func ResetBatchSizePercentage()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetRespectPdb` <a name="ResetRespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetRespectPdb"></a>

```go
func ResetRespectPdb()
```

##### `ResetRespectRestrictScaleDown` <a name="ResetRespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetRespectRestrictScaleDown"></a>

```go
func ResetRespectRestrictScaleDown()
```

##### `ResetVngIds` <a name="ResetVngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetVngIds"></a>

```go
func ResetVngIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentageInput">BatchMinHealthyPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectPdbInput">RespectPdbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectRestrictScaleDownInput">RespectRestrictScaleDownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.vngIdsInput">VngIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectPdb">RespectPdb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectRestrictScaleDown">RespectRestrictScaleDown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.vngIds">VngIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchMinHealthyPercentageInput`<sup>Optional</sup> <a name="BatchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentageInput"></a>

```go
func BatchMinHealthyPercentageInput() *f64
```

- *Type:* *f64

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchSizePercentageInput"></a>

```go
func BatchSizePercentageInput() *f64
```

- *Type:* *f64

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `RespectPdbInput`<sup>Optional</sup> <a name="RespectPdbInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectPdbInput"></a>

```go
func RespectPdbInput() interface{}
```

- *Type:* interface{}

---

##### `RespectRestrictScaleDownInput`<sup>Optional</sup> <a name="RespectRestrictScaleDownInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectRestrictScaleDownInput"></a>

```go
func RespectRestrictScaleDownInput() interface{}
```

- *Type:* interface{}

---

##### `VngIdsInput`<sup>Optional</sup> <a name="VngIdsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.vngIdsInput"></a>

```go
func VngIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BatchMinHealthyPercentage`<sup>Required</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentage"></a>

```go
func BatchMinHealthyPercentage() *f64
```

- *Type:* *f64

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchSizePercentage"></a>

```go
func BatchSizePercentage() *f64
```

- *Type:* *f64

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `RespectPdb`<sup>Required</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectPdb"></a>

```go
func RespectPdb() interface{}
```

- *Type:* interface{}

---

##### `RespectRestrictScaleDown`<sup>Required</sup> <a name="RespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectRestrictScaleDown"></a>

```go
func RespectRestrictScaleDown() interface{}
```

- *Type:* interface{}

---

##### `VngIds`<sup>Required</sup> <a name="VngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.vngIds"></a>

```go
func VngIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpSchedulingTasksParametersParametersClusterRoll
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a>

---


### OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference <a name="OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.putRollParameters">PutRollParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.resetApplyRoll">ResetApplyRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.resetRollParameters">ResetRollParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.resetScopeVersion">ResetScopeVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRollParameters` <a name="PutRollParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.putRollParameters"></a>

```go
func PutRollParameters(value OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.putRollParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters">OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters</a>

---

##### `ResetApplyRoll` <a name="ResetApplyRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.resetApplyRoll"></a>

```go
func ResetApplyRoll()
```

##### `ResetRollParameters` <a name="ResetRollParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.resetRollParameters"></a>

```go
func ResetRollParameters()
```

##### `ResetScopeVersion` <a name="ResetScopeVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.resetScopeVersion"></a>

```go
func ResetScopeVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.rollParameters">RollParameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference">OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.applyRollInput">ApplyRollInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.rollParametersInput">RollParametersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters">OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.scopeVersionInput">ScopeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.applyRoll">ApplyRoll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.scopeVersion">ScopeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig">OceanAksNpSchedulingTasksParametersParametersUpgradeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RollParameters`<sup>Required</sup> <a name="RollParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.rollParameters"></a>

```go
func RollParameters() OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference">OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference</a>

---

##### `ApplyRollInput`<sup>Optional</sup> <a name="ApplyRollInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.applyRollInput"></a>

```go
func ApplyRollInput() interface{}
```

- *Type:* interface{}

---

##### `RollParametersInput`<sup>Optional</sup> <a name="RollParametersInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.rollParametersInput"></a>

```go
func RollParametersInput() OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters">OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters</a>

---

##### `ScopeVersionInput`<sup>Optional</sup> <a name="ScopeVersionInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.scopeVersionInput"></a>

```go
func ScopeVersionInput() *string
```

- *Type:* *string

---

##### `ApplyRoll`<sup>Required</sup> <a name="ApplyRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.applyRoll"></a>

```go
func ApplyRoll() interface{}
```

- *Type:* interface{}

---

##### `ScopeVersion`<sup>Required</sup> <a name="ScopeVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.scopeVersion"></a>

```go
func ScopeVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpSchedulingTasksParametersParametersUpgradeConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfig">OceanAksNpSchedulingTasksParametersParametersUpgradeConfig</a>

---


### OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference <a name="OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resetBatchMinHealthyPercentage">ResetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resetBatchSizePercentage">ResetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resetRespectPdb">ResetRespectPdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resetRespectRestrictScaleDown">ResetRespectRestrictScaleDown</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchMinHealthyPercentage` <a name="ResetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resetBatchMinHealthyPercentage"></a>

```go
func ResetBatchMinHealthyPercentage()
```

##### `ResetBatchSizePercentage` <a name="ResetBatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resetBatchSizePercentage"></a>

```go
func ResetBatchSizePercentage()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetRespectPdb` <a name="ResetRespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resetRespectPdb"></a>

```go
func ResetRespectPdb()
```

##### `ResetRespectRestrictScaleDown` <a name="ResetRespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.resetRespectRestrictScaleDown"></a>

```go
func ResetRespectRestrictScaleDown()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.batchMinHealthyPercentageInput">BatchMinHealthyPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.respectPdbInput">RespectPdbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.respectRestrictScaleDownInput">RespectRestrictScaleDownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.respectPdb">RespectPdb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.respectRestrictScaleDown">RespectRestrictScaleDown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters">OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchMinHealthyPercentageInput`<sup>Optional</sup> <a name="BatchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.batchMinHealthyPercentageInput"></a>

```go
func BatchMinHealthyPercentageInput() *f64
```

- *Type:* *f64

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.batchSizePercentageInput"></a>

```go
func BatchSizePercentageInput() *f64
```

- *Type:* *f64

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `RespectPdbInput`<sup>Optional</sup> <a name="RespectPdbInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.respectPdbInput"></a>

```go
func RespectPdbInput() interface{}
```

- *Type:* interface{}

---

##### `RespectRestrictScaleDownInput`<sup>Optional</sup> <a name="RespectRestrictScaleDownInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.respectRestrictScaleDownInput"></a>

```go
func RespectRestrictScaleDownInput() interface{}
```

- *Type:* interface{}

---

##### `BatchMinHealthyPercentage`<sup>Required</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.batchMinHealthyPercentage"></a>

```go
func BatchMinHealthyPercentage() *f64
```

- *Type:* *f64

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.batchSizePercentage"></a>

```go
func BatchSizePercentage() *f64
```

- *Type:* *f64

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `RespectPdb`<sup>Required</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.respectPdb"></a>

```go
func RespectPdb() interface{}
```

- *Type:* interface{}

---

##### `RespectRestrictScaleDown`<sup>Required</sup> <a name="RespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.respectRestrictScaleDown"></a>

```go
func RespectRestrictScaleDown() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters">OceanAksNpSchedulingTasksParametersParametersUpgradeConfigRollParameters</a>

---


### OceanAksNpTaintsList <a name="OceanAksNpTaintsList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpTaintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksNpTaintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get"></a>

```go
func Get(index *f64) OceanAksNpTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpTaintsOutputReference <a name="OceanAksNpTaintsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpTaintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksNpTaintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpUpdatePolicyOutputReference <a name="OceanAksNpUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.putRollConfig">PutRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resetConditionedRoll">ResetConditionedRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resetRollConfig">ResetRollConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRollConfig` <a name="PutRollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.putRollConfig"></a>

```go
func PutRollConfig(value OceanAksNpUpdatePolicyRollConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a>

---

##### `ResetConditionedRoll` <a name="ResetConditionedRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resetConditionedRoll"></a>

```go
func ResetConditionedRoll()
```

##### `ResetRollConfig` <a name="ResetRollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resetRollConfig"></a>

```go
func ResetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference">OceanAksNpUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.conditionedRollInput">ConditionedRollInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.rollConfigInput">RollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.shouldRollInput">ShouldRollInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.conditionedRoll">ConditionedRoll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.shouldRoll">ShouldRoll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RollConfig`<sup>Required</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.rollConfig"></a>

```go
func RollConfig() OceanAksNpUpdatePolicyRollConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference">OceanAksNpUpdatePolicyRollConfigOutputReference</a>

---

##### `ConditionedRollInput`<sup>Optional</sup> <a name="ConditionedRollInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```go
func ConditionedRollInput() interface{}
```

- *Type:* interface{}

---

##### `RollConfigInput`<sup>Optional</sup> <a name="RollConfigInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.rollConfigInput"></a>

```go
func RollConfigInput() OceanAksNpUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a>

---

##### `ShouldRollInput`<sup>Optional</sup> <a name="ShouldRollInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.shouldRollInput"></a>

```go
func ShouldRollInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionedRoll`<sup>Required</sup> <a name="ConditionedRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.conditionedRoll"></a>

```go
func ConditionedRoll() interface{}
```

- *Type:* interface{}

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.shouldRoll"></a>

```go
func ShouldRoll() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

---


### OceanAksNpUpdatePolicyRollConfigOutputReference <a name="OceanAksNpUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpUpdatePolicyRollConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpUpdatePolicyRollConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">ResetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetBatchSizePercentage">ResetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetNodeNames">ResetNodeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetNodePoolNames">ResetNodePoolNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetRespectPdb">ResetRespectPdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetRespectRestrictScaleDown">ResetRespectRestrictScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetVngIds">ResetVngIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchMinHealthyPercentage` <a name="ResetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```go
func ResetBatchMinHealthyPercentage()
```

##### `ResetBatchSizePercentage` <a name="ResetBatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetBatchSizePercentage"></a>

```go
func ResetBatchSizePercentage()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetNodeNames` <a name="ResetNodeNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetNodeNames"></a>

```go
func ResetNodeNames()
```

##### `ResetNodePoolNames` <a name="ResetNodePoolNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetNodePoolNames"></a>

```go
func ResetNodePoolNames()
```

##### `ResetRespectPdb` <a name="ResetRespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetRespectPdb"></a>

```go
func ResetRespectPdb()
```

##### `ResetRespectRestrictScaleDown` <a name="ResetRespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetRespectRestrictScaleDown"></a>

```go
func ResetRespectRestrictScaleDown()
```

##### `ResetVngIds` <a name="ResetVngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetVngIds"></a>

```go
func ResetVngIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">BatchMinHealthyPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodeNamesInput">NodeNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodePoolNamesInput">NodePoolNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectPdbInput">RespectPdbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDownInput">RespectRestrictScaleDownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.vngIdsInput">VngIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodeNames">NodeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodePoolNames">NodePoolNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectPdb">RespectPdb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDown">RespectRestrictScaleDown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.vngIds">VngIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchMinHealthyPercentageInput`<sup>Optional</sup> <a name="BatchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```go
func BatchMinHealthyPercentageInput() *f64
```

- *Type:* *f64

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```go
func BatchSizePercentageInput() *f64
```

- *Type:* *f64

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `NodeNamesInput`<sup>Optional</sup> <a name="NodeNamesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodeNamesInput"></a>

```go
func NodeNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NodePoolNamesInput`<sup>Optional</sup> <a name="NodePoolNamesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodePoolNamesInput"></a>

```go
func NodePoolNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RespectPdbInput`<sup>Optional</sup> <a name="RespectPdbInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectPdbInput"></a>

```go
func RespectPdbInput() interface{}
```

- *Type:* interface{}

---

##### `RespectRestrictScaleDownInput`<sup>Optional</sup> <a name="RespectRestrictScaleDownInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDownInput"></a>

```go
func RespectRestrictScaleDownInput() interface{}
```

- *Type:* interface{}

---

##### `VngIdsInput`<sup>Optional</sup> <a name="VngIdsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.vngIdsInput"></a>

```go
func VngIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BatchMinHealthyPercentage`<sup>Required</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```go
func BatchMinHealthyPercentage() *f64
```

- *Type:* *f64

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```go
func BatchSizePercentage() *f64
```

- *Type:* *f64

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `NodeNames`<sup>Required</sup> <a name="NodeNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodeNames"></a>

```go
func NodeNames() *[]*string
```

- *Type:* *[]*string

---

##### `NodePoolNames`<sup>Required</sup> <a name="NodePoolNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodePoolNames"></a>

```go
func NodePoolNames() *[]*string
```

- *Type:* *[]*string

---

##### `RespectPdb`<sup>Required</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectPdb"></a>

```go
func RespectPdb() interface{}
```

- *Type:* interface{}

---

##### `RespectRestrictScaleDown`<sup>Required</sup> <a name="RespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDown"></a>

```go
func RespectRestrictScaleDown() interface{}
```

- *Type:* interface{}

---

##### `VngIds`<sup>Required</sup> <a name="VngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.vngIds"></a>

```go
func VngIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a>

---


### OceanAksNpVngTemplateSchedulingOutputReference <a name="OceanAksNpVngTemplateSchedulingOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpVngTemplateSchedulingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpVngTemplateSchedulingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.putVngTemplateShutdownHours">PutVngTemplateShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.resetVngTemplateShutdownHours">ResetVngTemplateShutdownHours</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVngTemplateShutdownHours` <a name="PutVngTemplateShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.putVngTemplateShutdownHours"></a>

```go
func PutVngTemplateShutdownHours(value OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.putVngTemplateShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours">OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours</a>

---

##### `ResetVngTemplateShutdownHours` <a name="ResetVngTemplateShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.resetVngTemplateShutdownHours"></a>

```go
func ResetVngTemplateShutdownHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.property.vngTemplateShutdownHours">VngTemplateShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference">OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.property.vngTemplateShutdownHoursInput">VngTemplateShutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours">OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateScheduling">OceanAksNpVngTemplateScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VngTemplateShutdownHours`<sup>Required</sup> <a name="VngTemplateShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.property.vngTemplateShutdownHours"></a>

```go
func VngTemplateShutdownHours() OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference">OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference</a>

---

##### `VngTemplateShutdownHoursInput`<sup>Optional</sup> <a name="VngTemplateShutdownHoursInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.property.vngTemplateShutdownHoursInput"></a>

```go
func VngTemplateShutdownHoursInput() OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours">OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpVngTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateScheduling">OceanAksNpVngTemplateScheduling</a>

---


### OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference <a name="OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceanaksnp"

oceanaksnp.NewOceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.resetTimeWindows">ResetTimeWindows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetTimeWindows` <a name="ResetTimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.resetTimeWindows"></a>

```go
func ResetTimeWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.timeWindowsInput">TimeWindowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.timeWindows">TimeWindows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours">OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeWindowsInput`<sup>Optional</sup> <a name="TimeWindowsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.timeWindowsInput"></a>

```go
func TimeWindowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.timeWindows"></a>

```go
func TimeWindows() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHoursOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours">OceanAksNpVngTemplateSchedulingVngTemplateShutdownHours</a>

---




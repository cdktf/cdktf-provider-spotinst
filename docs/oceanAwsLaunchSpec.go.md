# `oceanAwsLaunchSpec` Submodule <a name="`oceanAwsLaunchSpec` Submodule" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAwsLaunchSpec <a name="OceanAwsLaunchSpec" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec spotinst_ocean_aws_launch_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpec(scope Construct, id *string, config OceanAwsLaunchSpecConfig) OceanAwsLaunchSpec
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig">OceanAwsLaunchSpecConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig">OceanAwsLaunchSpecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleDown">PutAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadrooms">PutAutoscaleHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadroomsAutomatic">PutAutoscaleHeadroomsAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putCreateOptions">PutCreateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putDeleteOptions">PutDeleteOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putElasticIpPool">PutElasticIpPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putEphemeralStorage">PutEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putImages">PutImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceMetadataOptions">PutInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceTypesFilters">PutInstanceTypesFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putResourceLimits">PutResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingShutdownHours">PutSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingTask">PutSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleDown">ResetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleHeadrooms">ResetAutoscaleHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleHeadroomsAutomatic">ResetAutoscaleHeadroomsAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetCreateOptions">ResetCreateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetDeleteOptions">ResetDeleteOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetElasticIpPool">ResetElasticIpPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetEphemeralStorage">ResetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetImages">ResetImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceMetadataOptions">ResetInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceTypes">ResetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceTypesFilters">ResetInstanceTypesFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetPreferredSpotTypes">ResetPreferredSpotTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetResourceLimits">ResetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetRestrictScaleDown">ResetRestrictScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetRootVolumeSize">ResetRootVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSchedulingShutdownHours">ResetSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSchedulingTask">ResetSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetStrategy">ResetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetTaints">ResetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscaleDown` <a name="PutAutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleDown"></a>

```go
func PutAutoscaleDown(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleDown.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAutoscaleHeadrooms` <a name="PutAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadrooms"></a>

```go
func PutAutoscaleHeadrooms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadrooms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAutoscaleHeadroomsAutomatic` <a name="PutAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadroomsAutomatic"></a>

```go
func PutAutoscaleHeadroomsAutomatic(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadroomsAutomatic.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putBlockDeviceMappings"></a>

```go
func PutBlockDeviceMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putBlockDeviceMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCreateOptions` <a name="PutCreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putCreateOptions"></a>

```go
func PutCreateOptions(value OceanAwsLaunchSpecCreateOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putCreateOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a>

---

##### `PutDeleteOptions` <a name="PutDeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putDeleteOptions"></a>

```go
func PutDeleteOptions(value OceanAwsLaunchSpecDeleteOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putDeleteOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a>

---

##### `PutElasticIpPool` <a name="PutElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putElasticIpPool"></a>

```go
func PutElasticIpPool(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putElasticIpPool.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEphemeralStorage` <a name="PutEphemeralStorage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putEphemeralStorage"></a>

```go
func PutEphemeralStorage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putEphemeralStorage.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImages` <a name="PutImages" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putImages"></a>

```go
func PutImages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putImages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInstanceMetadataOptions` <a name="PutInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceMetadataOptions"></a>

```go
func PutInstanceMetadataOptions(value OceanAwsLaunchSpecInstanceMetadataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a>

---

##### `PutInstanceTypesFilters` <a name="PutInstanceTypesFilters" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceTypesFilters"></a>

```go
func PutInstanceTypesFilters(value OceanAwsLaunchSpecInstanceTypesFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceTypesFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a>

---

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putLabels"></a>

```go
func PutLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceLimits` <a name="PutResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putResourceLimits"></a>

```go
func PutResourceLimits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putResourceLimits.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedulingShutdownHours` <a name="PutSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingShutdownHours"></a>

```go
func PutSchedulingShutdownHours(value OceanAwsLaunchSpecSchedulingShutdownHours)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a>

---

##### `PutSchedulingTask` <a name="PutSchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingTask"></a>

```go
func PutSchedulingTask(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingTask.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putStrategy"></a>

```go
func PutStrategy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putStrategy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTaints"></a>

```go
func PutTaints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTaints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putUpdatePolicy"></a>

```go
func PutUpdatePolicy(value OceanAwsLaunchSpecUpdatePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a>

---

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAssociatePublicIpAddress"></a>

```go
func ResetAssociatePublicIpAddress()
```

##### `ResetAutoscaleDown` <a name="ResetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleDown"></a>

```go
func ResetAutoscaleDown()
```

##### `ResetAutoscaleHeadrooms` <a name="ResetAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleHeadrooms"></a>

```go
func ResetAutoscaleHeadrooms()
```

##### `ResetAutoscaleHeadroomsAutomatic` <a name="ResetAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleHeadroomsAutomatic"></a>

```go
func ResetAutoscaleHeadroomsAutomatic()
```

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetBlockDeviceMappings"></a>

```go
func ResetBlockDeviceMappings()
```

##### `ResetCreateOptions` <a name="ResetCreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetCreateOptions"></a>

```go
func ResetCreateOptions()
```

##### `ResetDeleteOptions` <a name="ResetDeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetDeleteOptions"></a>

```go
func ResetDeleteOptions()
```

##### `ResetElasticIpPool` <a name="ResetElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetElasticIpPool"></a>

```go
func ResetElasticIpPool()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetEphemeralStorage"></a>

```go
func ResetEphemeralStorage()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetIamInstanceProfile"></a>

```go
func ResetIamInstanceProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetId"></a>

```go
func ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetImageId"></a>

```go
func ResetImageId()
```

##### `ResetImages` <a name="ResetImages" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetImages"></a>

```go
func ResetImages()
```

##### `ResetInstanceMetadataOptions` <a name="ResetInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceMetadataOptions"></a>

```go
func ResetInstanceMetadataOptions()
```

##### `ResetInstanceTypes` <a name="ResetInstanceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceTypes"></a>

```go
func ResetInstanceTypes()
```

##### `ResetInstanceTypesFilters` <a name="ResetInstanceTypesFilters" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceTypesFilters"></a>

```go
func ResetInstanceTypesFilters()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetName"></a>

```go
func ResetName()
```

##### `ResetPreferredSpotTypes` <a name="ResetPreferredSpotTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetPreferredSpotTypes"></a>

```go
func ResetPreferredSpotTypes()
```

##### `ResetResourceLimits` <a name="ResetResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetResourceLimits"></a>

```go
func ResetResourceLimits()
```

##### `ResetRestrictScaleDown` <a name="ResetRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetRestrictScaleDown"></a>

```go
func ResetRestrictScaleDown()
```

##### `ResetRootVolumeSize` <a name="ResetRootVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetRootVolumeSize"></a>

```go
func ResetRootVolumeSize()
```

##### `ResetSchedulingShutdownHours` <a name="ResetSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSchedulingShutdownHours"></a>

```go
func ResetSchedulingShutdownHours()
```

##### `ResetSchedulingTask` <a name="ResetSchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSchedulingTask"></a>

```go
func ResetSchedulingTask()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetStrategy"></a>

```go
func ResetStrategy()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetTaints"></a>

```go
func ResetTaints()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetUpdatePolicy"></a>

```go
func ResetUpdatePolicy()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetUserData"></a>

```go
func ResetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceanAwsLaunchSpec resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.OceanAwsLaunchSpec_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.OceanAwsLaunchSpec_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.OceanAwsLaunchSpec_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.OceanAwsLaunchSpec_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OceanAwsLaunchSpec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OceanAwsLaunchSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OceanAwsLaunchSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OceanAwsLaunchSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList">OceanAwsLaunchSpecAutoscaleDownList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadrooms">AutoscaleHeadrooms</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList">OceanAwsLaunchSpecAutoscaleHeadroomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsAutomatic">AutoscaleHeadroomsAutomatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList">OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList">OceanAwsLaunchSpecBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.createOptions">CreateOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference">OceanAwsLaunchSpecCreateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.deleteOptions">DeleteOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference">OceanAwsLaunchSpecDeleteOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.elasticIpPool">ElasticIpPool</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList">OceanAwsLaunchSpecElasticIpPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.ephemeralStorage">EphemeralStorage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList">OceanAwsLaunchSpecEphemeralStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.images">Images</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList">OceanAwsLaunchSpecImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference">OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesFilters">InstanceTypesFilters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference">OceanAwsLaunchSpecInstanceTypesFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList">OceanAwsLaunchSpecLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList">OceanAwsLaunchSpecResourceLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingShutdownHours">SchedulingShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference">OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingTask">SchedulingTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList">OceanAwsLaunchSpecSchedulingTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList">OceanAwsLaunchSpecStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList">OceanAwsLaunchSpecTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList">OceanAwsLaunchSpecTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference">OceanAwsLaunchSpecUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleDownInput">AutoscaleDownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsAutomaticInput">AutoscaleHeadroomsAutomaticInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsInput">AutoscaleHeadroomsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.createOptionsInput">CreateOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.deleteOptionsInput">DeleteOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.elasticIpPoolInput">ElasticIpPoolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imagesInput">ImagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceMetadataOptionsInput">InstanceMetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesFiltersInput">InstanceTypesFiltersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesInput">InstanceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.labelsInput">LabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.oceanIdInput">OceanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredSpotTypesInput">PreferredSpotTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.resourceLimitsInput">ResourceLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.restrictScaleDownInput">RestrictScaleDownInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.rootVolumeSizeInput">RootVolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingShutdownHoursInput">SchedulingShutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingTaskInput">SchedulingTaskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.strategyInput">StrategyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.taintsInput">TaintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypes">InstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.oceanId">OceanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredSpotTypes">PreferredSpotTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.restrictScaleDown">RestrictScaleDown</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.rootVolumeSize">RootVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoscaleDown`<sup>Required</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleDown"></a>

```go
func AutoscaleDown() OceanAwsLaunchSpecAutoscaleDownList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList">OceanAwsLaunchSpecAutoscaleDownList</a>

---

##### `AutoscaleHeadrooms`<sup>Required</sup> <a name="AutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadrooms"></a>

```go
func AutoscaleHeadrooms() OceanAwsLaunchSpecAutoscaleHeadroomsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList">OceanAwsLaunchSpecAutoscaleHeadroomsList</a>

---

##### `AutoscaleHeadroomsAutomatic`<sup>Required</sup> <a name="AutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsAutomatic"></a>

```go
func AutoscaleHeadroomsAutomatic() OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList">OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList</a>

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.blockDeviceMappings"></a>

```go
func BlockDeviceMappings() OceanAwsLaunchSpecBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList">OceanAwsLaunchSpecBlockDeviceMappingsList</a>

---

##### `CreateOptions`<sup>Required</sup> <a name="CreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.createOptions"></a>

```go
func CreateOptions() OceanAwsLaunchSpecCreateOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference">OceanAwsLaunchSpecCreateOptionsOutputReference</a>

---

##### `DeleteOptions`<sup>Required</sup> <a name="DeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.deleteOptions"></a>

```go
func DeleteOptions() OceanAwsLaunchSpecDeleteOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference">OceanAwsLaunchSpecDeleteOptionsOutputReference</a>

---

##### `ElasticIpPool`<sup>Required</sup> <a name="ElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.elasticIpPool"></a>

```go
func ElasticIpPool() OceanAwsLaunchSpecElasticIpPoolList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList">OceanAwsLaunchSpecElasticIpPoolList</a>

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.ephemeralStorage"></a>

```go
func EphemeralStorage() OceanAwsLaunchSpecEphemeralStorageList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList">OceanAwsLaunchSpecEphemeralStorageList</a>

---

##### `Images`<sup>Required</sup> <a name="Images" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.images"></a>

```go
func Images() OceanAwsLaunchSpecImagesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList">OceanAwsLaunchSpecImagesList</a>

---

##### `InstanceMetadataOptions`<sup>Required</sup> <a name="InstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceMetadataOptions"></a>

```go
func InstanceMetadataOptions() OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference">OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference</a>

---

##### `InstanceTypesFilters`<sup>Required</sup> <a name="InstanceTypesFilters" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesFilters"></a>

```go
func InstanceTypesFilters() OceanAwsLaunchSpecInstanceTypesFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference">OceanAwsLaunchSpecInstanceTypesFiltersOutputReference</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.labels"></a>

```go
func Labels() OceanAwsLaunchSpecLabelsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList">OceanAwsLaunchSpecLabelsList</a>

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.resourceLimits"></a>

```go
func ResourceLimits() OceanAwsLaunchSpecResourceLimitsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList">OceanAwsLaunchSpecResourceLimitsList</a>

---

##### `SchedulingShutdownHours`<sup>Required</sup> <a name="SchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingShutdownHours"></a>

```go
func SchedulingShutdownHours() OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference">OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference</a>

---

##### `SchedulingTask`<sup>Required</sup> <a name="SchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingTask"></a>

```go
func SchedulingTask() OceanAwsLaunchSpecSchedulingTaskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList">OceanAwsLaunchSpecSchedulingTaskList</a>

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.strategy"></a>

```go
func Strategy() OceanAwsLaunchSpecStrategyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList">OceanAwsLaunchSpecStrategyList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tags"></a>

```go
func Tags() OceanAwsLaunchSpecTagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList">OceanAwsLaunchSpecTagsList</a>

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.taints"></a>

```go
func Taints() OceanAwsLaunchSpecTaintsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList">OceanAwsLaunchSpecTaintsList</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.updatePolicy"></a>

```go
func UpdatePolicy() OceanAwsLaunchSpecUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference">OceanAwsLaunchSpecUpdatePolicyOutputReference</a>

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.associatePublicIpAddressInput"></a>

```go
func AssociatePublicIpAddressInput() interface{}
```

- *Type:* interface{}

---

##### `AutoscaleDownInput`<sup>Optional</sup> <a name="AutoscaleDownInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleDownInput"></a>

```go
func AutoscaleDownInput() interface{}
```

- *Type:* interface{}

---

##### `AutoscaleHeadroomsAutomaticInput`<sup>Optional</sup> <a name="AutoscaleHeadroomsAutomaticInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsAutomaticInput"></a>

```go
func AutoscaleHeadroomsAutomaticInput() interface{}
```

- *Type:* interface{}

---

##### `AutoscaleHeadroomsInput`<sup>Optional</sup> <a name="AutoscaleHeadroomsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsInput"></a>

```go
func AutoscaleHeadroomsInput() interface{}
```

- *Type:* interface{}

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.blockDeviceMappingsInput"></a>

```go
func BlockDeviceMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `CreateOptionsInput`<sup>Optional</sup> <a name="CreateOptionsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.createOptionsInput"></a>

```go
func CreateOptionsInput() OceanAwsLaunchSpecCreateOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a>

---

##### `DeleteOptionsInput`<sup>Optional</sup> <a name="DeleteOptionsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.deleteOptionsInput"></a>

```go
func DeleteOptionsInput() OceanAwsLaunchSpecDeleteOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a>

---

##### `ElasticIpPoolInput`<sup>Optional</sup> <a name="ElasticIpPoolInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.elasticIpPoolInput"></a>

```go
func ElasticIpPoolInput() interface{}
```

- *Type:* interface{}

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.ephemeralStorageInput"></a>

```go
func EphemeralStorageInput() interface{}
```

- *Type:* interface{}

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.iamInstanceProfileInput"></a>

```go
func IamInstanceProfileInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `ImagesInput`<sup>Optional</sup> <a name="ImagesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imagesInput"></a>

```go
func ImagesInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceMetadataOptionsInput`<sup>Optional</sup> <a name="InstanceMetadataOptionsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceMetadataOptionsInput"></a>

```go
func InstanceMetadataOptionsInput() OceanAwsLaunchSpecInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a>

---

##### `InstanceTypesFiltersInput`<sup>Optional</sup> <a name="InstanceTypesFiltersInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesFiltersInput"></a>

```go
func InstanceTypesFiltersInput() OceanAwsLaunchSpecInstanceTypesFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a>

---

##### `InstanceTypesInput`<sup>Optional</sup> <a name="InstanceTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesInput"></a>

```go
func InstanceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.labelsInput"></a>

```go
func LabelsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OceanIdInput`<sup>Optional</sup> <a name="OceanIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.oceanIdInput"></a>

```go
func OceanIdInput() *string
```

- *Type:* *string

---

##### `PreferredSpotTypesInput`<sup>Optional</sup> <a name="PreferredSpotTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredSpotTypesInput"></a>

```go
func PreferredSpotTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceLimitsInput`<sup>Optional</sup> <a name="ResourceLimitsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.resourceLimitsInput"></a>

```go
func ResourceLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictScaleDownInput`<sup>Optional</sup> <a name="RestrictScaleDownInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.restrictScaleDownInput"></a>

```go
func RestrictScaleDownInput() interface{}
```

- *Type:* interface{}

---

##### `RootVolumeSizeInput`<sup>Optional</sup> <a name="RootVolumeSizeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.rootVolumeSizeInput"></a>

```go
func RootVolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `SchedulingShutdownHoursInput`<sup>Optional</sup> <a name="SchedulingShutdownHoursInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingShutdownHoursInput"></a>

```go
func SchedulingShutdownHoursInput() OceanAwsLaunchSpecSchedulingShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a>

---

##### `SchedulingTaskInput`<sup>Optional</sup> <a name="SchedulingTaskInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingTaskInput"></a>

```go
func SchedulingTaskInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.strategyInput"></a>

```go
func StrategyInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.taintsInput"></a>

```go
func TaintsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.updatePolicyInput"></a>

```go
func UpdatePolicyInput() OceanAwsLaunchSpecUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a>

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.associatePublicIpAddress"></a>

```go
func AssociatePublicIpAddress() interface{}
```

- *Type:* interface{}

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypes"></a>

```go
func InstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OceanId`<sup>Required</sup> <a name="OceanId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.oceanId"></a>

```go
func OceanId() *string
```

- *Type:* *string

---

##### `PreferredSpotTypes`<sup>Required</sup> <a name="PreferredSpotTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredSpotTypes"></a>

```go
func PreferredSpotTypes() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictScaleDown`<sup>Required</sup> <a name="RestrictScaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.restrictScaleDown"></a>

```go
func RestrictScaleDown() interface{}
```

- *Type:* interface{}

---

##### `RootVolumeSize`<sup>Required</sup> <a name="RootVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.rootVolumeSize"></a>

```go
func RootVolumeSize() *f64
```

- *Type:* *f64

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAwsLaunchSpecAutoscaleDown <a name="OceanAwsLaunchSpecAutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecAutoscaleDown {
	MaxScaleDownPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#max_scale_down_percentage OceanAwsLaunchSpec#max_scale_down_percentage}. |

---

##### `MaxScaleDownPercentage`<sup>Optional</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown.property.maxScaleDownPercentage"></a>

```go
MaxScaleDownPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#max_scale_down_percentage OceanAwsLaunchSpec#max_scale_down_percentage}.

---

### OceanAwsLaunchSpecAutoscaleHeadrooms <a name="OceanAwsLaunchSpecAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecAutoscaleHeadrooms {
	NumOfUnits: *f64,
	CpuPerUnit: *f64,
	GpuPerUnit: *f64,
	MemoryPerUnit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.numOfUnits">NumOfUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit">CpuPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.gpuPerUnit">GpuPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}. |

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.numOfUnits"></a>

```go
NumOfUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}.

---

##### `CpuPerUnit`<sup>Optional</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit"></a>

```go
CpuPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}.

---

##### `GpuPerUnit`<sup>Optional</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.gpuPerUnit"></a>

```go
GpuPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}.

---

##### `MemoryPerUnit`<sup>Optional</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit"></a>

```go
MemoryPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}.

---

### OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic <a name="OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic {
	AutoHeadroomPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#auto_headroom_percentage OceanAwsLaunchSpec#auto_headroom_percentage}. |

---

##### `AutoHeadroomPercentage`<sup>Optional</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic.property.autoHeadroomPercentage"></a>

```go
AutoHeadroomPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#auto_headroom_percentage OceanAwsLaunchSpec#auto_headroom_percentage}.

---

### OceanAwsLaunchSpecBlockDeviceMappings <a name="OceanAwsLaunchSpecBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecBlockDeviceMappings {
	DeviceName: *string,
	Ebs: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs,
	NoDevice: *string,
	VirtualName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#device_name OceanAwsLaunchSpec#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.noDevice">NoDevice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#no_device OceanAwsLaunchSpec#no_device}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.virtualName">VirtualName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#virtual_name OceanAwsLaunchSpec#virtual_name}. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#device_name OceanAwsLaunchSpec#device_name}.

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.ebs"></a>

```go
Ebs OceanAwsLaunchSpecBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#ebs OceanAwsLaunchSpec#ebs}

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.noDevice"></a>

```go
NoDevice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#no_device OceanAwsLaunchSpec#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.virtualName"></a>

```go
VirtualName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#virtual_name OceanAwsLaunchSpec#virtual_name}.

---

### OceanAwsLaunchSpecBlockDeviceMappingsEbs <a name="OceanAwsLaunchSpecBlockDeviceMappingsEbs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecBlockDeviceMappingsEbs {
	DeleteOnTermination: interface{},
	DynamicVolumeSize: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize,
	Encrypted: interface{},
	Iops: *f64,
	KmsKeyId: *string,
	SnapshotId: *string,
	Throughput: *f64,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#delete_on_termination OceanAwsLaunchSpec#delete_on_termination}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.dynamicVolumeSize">DynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | dynamic_volume_size block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#encrypted OceanAwsLaunchSpec#encrypted}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#iops OceanAwsLaunchSpec#iops}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#kms_key_id OceanAwsLaunchSpec#kms_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#snapshot_id OceanAwsLaunchSpec#snapshot_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#throughput OceanAwsLaunchSpec#throughput}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#volume_size OceanAwsLaunchSpec#volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#volume_type OceanAwsLaunchSpec#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```go
DeleteOnTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#delete_on_termination OceanAwsLaunchSpec#delete_on_termination}.

---

##### `DynamicVolumeSize`<sup>Optional</sup> <a name="DynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.dynamicVolumeSize"></a>

```go
DynamicVolumeSize OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

dynamic_volume_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#dynamic_volume_size OceanAwsLaunchSpec#dynamic_volume_size}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#encrypted OceanAwsLaunchSpec#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#iops OceanAwsLaunchSpec#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#kms_key_id OceanAwsLaunchSpec#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#snapshot_id OceanAwsLaunchSpec#snapshot_id}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#throughput OceanAwsLaunchSpec#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#volume_size OceanAwsLaunchSpec#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#volume_type OceanAwsLaunchSpec#volume_type}.

---

### OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize <a name="OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize {
	BaseSize: *f64,
	Resource: *string,
	SizePerResourceUnit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize">BaseSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#base_size OceanAwsLaunchSpec#base_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.resource">Resource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#resource OceanAwsLaunchSpec#resource}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit">SizePerResourceUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#size_per_resource_unit OceanAwsLaunchSpec#size_per_resource_unit}. |

---

##### `BaseSize`<sup>Required</sup> <a name="BaseSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize"></a>

```go
BaseSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#base_size OceanAwsLaunchSpec#base_size}.

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#resource OceanAwsLaunchSpec#resource}.

---

##### `SizePerResourceUnit`<sup>Required</sup> <a name="SizePerResourceUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit"></a>

```go
SizePerResourceUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#size_per_resource_unit OceanAwsLaunchSpec#size_per_resource_unit}.

---

### OceanAwsLaunchSpecConfig <a name="OceanAwsLaunchSpecConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OceanId: *string,
	AssociatePublicIpAddress: interface{},
	AutoscaleDown: interface{},
	AutoscaleHeadrooms: interface{},
	AutoscaleHeadroomsAutomatic: interface{},
	BlockDeviceMappings: interface{},
	CreateOptions: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions,
	DeleteOptions: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions,
	ElasticIpPool: interface{},
	EphemeralStorage: interface{},
	IamInstanceProfile: *string,
	Id: *string,
	ImageId: *string,
	Images: interface{},
	InstanceMetadataOptions: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions,
	InstanceTypes: *[]*string,
	InstanceTypesFilters: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters,
	Labels: interface{},
	Name: *string,
	PreferredSpotTypes: *[]*string,
	ResourceLimits: interface{},
	RestrictScaleDown: interface{},
	RootVolumeSize: *f64,
	SchedulingShutdownHours: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours,
	SchedulingTask: interface{},
	SecurityGroups: *[]*string,
	Strategy: interface{},
	SubnetIds: *[]*string,
	Tags: interface{},
	Taints: interface{},
	UpdatePolicy: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy,
	UserData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.oceanId">OceanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#ocean_id OceanAwsLaunchSpec#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#associate_public_ip_address OceanAwsLaunchSpec#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleDown">AutoscaleDown</a></code> | <code>interface{}</code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleHeadrooms">AutoscaleHeadrooms</a></code> | <code>interface{}</code> | autoscale_headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleHeadroomsAutomatic">AutoscaleHeadroomsAutomatic</a></code> | <code>interface{}</code> | autoscale_headrooms_automatic block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>interface{}</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.createOptions">CreateOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a></code> | create_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.deleteOptions">DeleteOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a></code> | delete_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.elasticIpPool">ElasticIpPool</a></code> | <code>interface{}</code> | elastic_ip_pool block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.ephemeralStorage">EphemeralStorage</a></code> | <code>interface{}</code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#iam_instance_profile OceanAwsLaunchSpec#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#id OceanAwsLaunchSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.images">Images</a></code> | <code>interface{}</code> | images block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceTypes">InstanceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#instance_types OceanAwsLaunchSpec#instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceTypesFilters">InstanceTypesFilters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a></code> | instance_types_filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.labels">Labels</a></code> | <code>interface{}</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#name OceanAwsLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.preferredSpotTypes">PreferredSpotTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#preferred_spot_types OceanAwsLaunchSpec#preferred_spot_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.resourceLimits">ResourceLimits</a></code> | <code>interface{}</code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.restrictScaleDown">RestrictScaleDown</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#restrict_scale_down OceanAwsLaunchSpec#restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.rootVolumeSize">RootVolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#root_volume_size OceanAwsLaunchSpec#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.schedulingShutdownHours">SchedulingShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a></code> | scheduling_shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.schedulingTask">SchedulingTask</a></code> | <code>interface{}</code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#security_groups OceanAwsLaunchSpec#security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.strategy">Strategy</a></code> | <code>interface{}</code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#subnet_ids OceanAwsLaunchSpec#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.taints">Taints</a></code> | <code>interface{}</code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#user_data OceanAwsLaunchSpec#user_data}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OceanId`<sup>Required</sup> <a name="OceanId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.oceanId"></a>

```go
OceanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#ocean_id OceanAwsLaunchSpec#ocean_id}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.associatePublicIpAddress"></a>

```go
AssociatePublicIpAddress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#associate_public_ip_address OceanAwsLaunchSpec#associate_public_ip_address}.

---

##### `AutoscaleDown`<sup>Optional</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleDown"></a>

```go
AutoscaleDown interface{}
```

- *Type:* interface{}

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#autoscale_down OceanAwsLaunchSpec#autoscale_down}

---

##### `AutoscaleHeadrooms`<sup>Optional</sup> <a name="AutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleHeadrooms"></a>

```go
AutoscaleHeadrooms interface{}
```

- *Type:* interface{}

autoscale_headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#autoscale_headrooms OceanAwsLaunchSpec#autoscale_headrooms}

---

##### `AutoscaleHeadroomsAutomatic`<sup>Optional</sup> <a name="AutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleHeadroomsAutomatic"></a>

```go
AutoscaleHeadroomsAutomatic interface{}
```

- *Type:* interface{}

autoscale_headrooms_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#autoscale_headrooms_automatic OceanAwsLaunchSpec#autoscale_headrooms_automatic}

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.blockDeviceMappings"></a>

```go
BlockDeviceMappings interface{}
```

- *Type:* interface{}

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#block_device_mappings OceanAwsLaunchSpec#block_device_mappings}

---

##### `CreateOptions`<sup>Optional</sup> <a name="CreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.createOptions"></a>

```go
CreateOptions OceanAwsLaunchSpecCreateOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a>

create_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#create_options OceanAwsLaunchSpec#create_options}

---

##### `DeleteOptions`<sup>Optional</sup> <a name="DeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.deleteOptions"></a>

```go
DeleteOptions OceanAwsLaunchSpecDeleteOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a>

delete_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#delete_options OceanAwsLaunchSpec#delete_options}

---

##### `ElasticIpPool`<sup>Optional</sup> <a name="ElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.elasticIpPool"></a>

```go
ElasticIpPool interface{}
```

- *Type:* interface{}

elastic_ip_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#elastic_ip_pool OceanAwsLaunchSpec#elastic_ip_pool}

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.ephemeralStorage"></a>

```go
EphemeralStorage interface{}
```

- *Type:* interface{}

ephemeral_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#ephemeral_storage OceanAwsLaunchSpec#ephemeral_storage}

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.iamInstanceProfile"></a>

```go
IamInstanceProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#iam_instance_profile OceanAwsLaunchSpec#iam_instance_profile}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#id OceanAwsLaunchSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}.

---

##### `Images`<sup>Optional</sup> <a name="Images" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.images"></a>

```go
Images interface{}
```

- *Type:* interface{}

images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#images OceanAwsLaunchSpec#images}

---

##### `InstanceMetadataOptions`<sup>Optional</sup> <a name="InstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceMetadataOptions"></a>

```go
InstanceMetadataOptions OceanAwsLaunchSpecInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#instance_metadata_options OceanAwsLaunchSpec#instance_metadata_options}

---

##### `InstanceTypes`<sup>Optional</sup> <a name="InstanceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceTypes"></a>

```go
InstanceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#instance_types OceanAwsLaunchSpec#instance_types}.

---

##### `InstanceTypesFilters`<sup>Optional</sup> <a name="InstanceTypesFilters" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceTypesFilters"></a>

```go
InstanceTypesFilters OceanAwsLaunchSpecInstanceTypesFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a>

instance_types_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#instance_types_filters OceanAwsLaunchSpec#instance_types_filters}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.labels"></a>

```go
Labels interface{}
```

- *Type:* interface{}

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#labels OceanAwsLaunchSpec#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#name OceanAwsLaunchSpec#name}.

---

##### `PreferredSpotTypes`<sup>Optional</sup> <a name="PreferredSpotTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.preferredSpotTypes"></a>

```go
PreferredSpotTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#preferred_spot_types OceanAwsLaunchSpec#preferred_spot_types}.

---

##### `ResourceLimits`<sup>Optional</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.resourceLimits"></a>

```go
ResourceLimits interface{}
```

- *Type:* interface{}

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#resource_limits OceanAwsLaunchSpec#resource_limits}

---

##### `RestrictScaleDown`<sup>Optional</sup> <a name="RestrictScaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.restrictScaleDown"></a>

```go
RestrictScaleDown interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#restrict_scale_down OceanAwsLaunchSpec#restrict_scale_down}.

---

##### `RootVolumeSize`<sup>Optional</sup> <a name="RootVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.rootVolumeSize"></a>

```go
RootVolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#root_volume_size OceanAwsLaunchSpec#root_volume_size}.

---

##### `SchedulingShutdownHours`<sup>Optional</sup> <a name="SchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.schedulingShutdownHours"></a>

```go
SchedulingShutdownHours OceanAwsLaunchSpecSchedulingShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a>

scheduling_shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#scheduling_shutdown_hours OceanAwsLaunchSpec#scheduling_shutdown_hours}

---

##### `SchedulingTask`<sup>Optional</sup> <a name="SchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.schedulingTask"></a>

```go
SchedulingTask interface{}
```

- *Type:* interface{}

scheduling_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#scheduling_task OceanAwsLaunchSpec#scheduling_task}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#security_groups OceanAwsLaunchSpec#security_groups}.

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.strategy"></a>

```go
Strategy interface{}
```

- *Type:* interface{}

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#strategy OceanAwsLaunchSpec#strategy}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#subnet_ids OceanAwsLaunchSpec#subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#tags OceanAwsLaunchSpec#tags}

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.taints"></a>

```go
Taints interface{}
```

- *Type:* interface{}

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#taints OceanAwsLaunchSpec#taints}

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.updatePolicy"></a>

```go
UpdatePolicy OceanAwsLaunchSpecUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#update_policy OceanAwsLaunchSpec#update_policy}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#user_data OceanAwsLaunchSpec#user_data}.

---

### OceanAwsLaunchSpecCreateOptions <a name="OceanAwsLaunchSpecCreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecCreateOptions {
	InitialNodes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions.property.initialNodes">InitialNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#initial_nodes OceanAwsLaunchSpec#initial_nodes}. |

---

##### `InitialNodes`<sup>Optional</sup> <a name="InitialNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions.property.initialNodes"></a>

```go
InitialNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#initial_nodes OceanAwsLaunchSpec#initial_nodes}.

---

### OceanAwsLaunchSpecDeleteOptions <a name="OceanAwsLaunchSpecDeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecDeleteOptions {
	ForceDelete: interface{},
	DeleteNodes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#force_delete OceanAwsLaunchSpec#force_delete}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.property.deleteNodes">DeleteNodes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#delete_nodes OceanAwsLaunchSpec#delete_nodes}. |

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#force_delete OceanAwsLaunchSpec#force_delete}.

---

##### `DeleteNodes`<sup>Optional</sup> <a name="DeleteNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.property.deleteNodes"></a>

```go
DeleteNodes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#delete_nodes OceanAwsLaunchSpec#delete_nodes}.

---

### OceanAwsLaunchSpecElasticIpPool <a name="OceanAwsLaunchSpecElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecElasticIpPool {
	TagSelector: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool.property.tagSelector">TagSelector</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a></code> | tag_selector block. |

---

##### `TagSelector`<sup>Optional</sup> <a name="TagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool.property.tagSelector"></a>

```go
TagSelector OceanAwsLaunchSpecElasticIpPoolTagSelector
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a>

tag_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#tag_selector OceanAwsLaunchSpec#tag_selector}

---

### OceanAwsLaunchSpecElasticIpPoolTagSelector <a name="OceanAwsLaunchSpecElasticIpPoolTagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecElasticIpPoolTagSelector {
	TagKey: *string,
	TagValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#tag_key OceanAwsLaunchSpec#tag_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.property.tagValue">TagValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#tag_value OceanAwsLaunchSpec#tag_value}. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#tag_key OceanAwsLaunchSpec#tag_key}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.property.tagValue"></a>

```go
TagValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#tag_value OceanAwsLaunchSpec#tag_value}.

---

### OceanAwsLaunchSpecEphemeralStorage <a name="OceanAwsLaunchSpecEphemeralStorage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecEphemeralStorage {
	EphemeralStorageDeviceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage.property.ephemeralStorageDeviceName">EphemeralStorageDeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#ephemeral_storage_device_name OceanAwsLaunchSpec#ephemeral_storage_device_name}. |

---

##### `EphemeralStorageDeviceName`<sup>Optional</sup> <a name="EphemeralStorageDeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage.property.ephemeralStorageDeviceName"></a>

```go
EphemeralStorageDeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#ephemeral_storage_device_name OceanAwsLaunchSpec#ephemeral_storage_device_name}.

---

### OceanAwsLaunchSpecImages <a name="OceanAwsLaunchSpecImages" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecImages {
	ImageId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}. |

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}.

---

### OceanAwsLaunchSpecInstanceMetadataOptions <a name="OceanAwsLaunchSpecInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecInstanceMetadataOptions {
	HttpTokens: *string,
	HttpPutResponseHopLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#http_tokens OceanAwsLaunchSpec#http_tokens}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#http_put_response_hop_limit OceanAwsLaunchSpec#http_put_response_hop_limit}. |

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.property.httpTokens"></a>

```go
HttpTokens *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#http_tokens OceanAwsLaunchSpec#http_tokens}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```go
HttpPutResponseHopLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#http_put_response_hop_limit OceanAwsLaunchSpec#http_put_response_hop_limit}.

---

### OceanAwsLaunchSpecInstanceTypesFilters <a name="OceanAwsLaunchSpecInstanceTypesFilters" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecInstanceTypesFilters {
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
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.categories">Categories</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#categories OceanAwsLaunchSpec#categories}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.diskTypes">DiskTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#disk_types OceanAwsLaunchSpec#disk_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.excludeFamilies">ExcludeFamilies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#exclude_families OceanAwsLaunchSpec#exclude_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.excludeMetal">ExcludeMetal</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#exclude_metal OceanAwsLaunchSpec#exclude_metal}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.hypervisor">Hypervisor</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#hypervisor OceanAwsLaunchSpec#hypervisor}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.includeFamilies">IncludeFamilies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#include_families OceanAwsLaunchSpec#include_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.isEnaSupported">IsEnaSupported</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#is_ena_supported OceanAwsLaunchSpec#is_ena_supported}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxGpu">MaxGpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#max_gpu OceanAwsLaunchSpec#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#max_memory_gib OceanAwsLaunchSpec#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxNetworkPerformance">MaxNetworkPerformance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#max_network_performance OceanAwsLaunchSpec#max_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#max_vcpu OceanAwsLaunchSpec#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minEnis">MinEnis</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#min_enis OceanAwsLaunchSpec#min_enis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minGpu">MinGpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#min_gpu OceanAwsLaunchSpec#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minMemoryGib">MinMemoryGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#min_memory_gib OceanAwsLaunchSpec#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minNetworkPerformance">MinNetworkPerformance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#min_network_performance OceanAwsLaunchSpec#min_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minVcpu">MinVcpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#min_vcpu OceanAwsLaunchSpec#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.rootDeviceTypes">RootDeviceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#root_device_types OceanAwsLaunchSpec#root_device_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.virtualizationTypes">VirtualizationTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#virtualization_types OceanAwsLaunchSpec#virtualization_types}. |

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.categories"></a>

```go
Categories *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#categories OceanAwsLaunchSpec#categories}.

---

##### `DiskTypes`<sup>Optional</sup> <a name="DiskTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.diskTypes"></a>

```go
DiskTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#disk_types OceanAwsLaunchSpec#disk_types}.

---

##### `ExcludeFamilies`<sup>Optional</sup> <a name="ExcludeFamilies" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.excludeFamilies"></a>

```go
ExcludeFamilies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#exclude_families OceanAwsLaunchSpec#exclude_families}.

---

##### `ExcludeMetal`<sup>Optional</sup> <a name="ExcludeMetal" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.excludeMetal"></a>

```go
ExcludeMetal interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#exclude_metal OceanAwsLaunchSpec#exclude_metal}.

---

##### `Hypervisor`<sup>Optional</sup> <a name="Hypervisor" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.hypervisor"></a>

```go
Hypervisor *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#hypervisor OceanAwsLaunchSpec#hypervisor}.

---

##### `IncludeFamilies`<sup>Optional</sup> <a name="IncludeFamilies" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.includeFamilies"></a>

```go
IncludeFamilies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#include_families OceanAwsLaunchSpec#include_families}.

---

##### `IsEnaSupported`<sup>Optional</sup> <a name="IsEnaSupported" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.isEnaSupported"></a>

```go
IsEnaSupported *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#is_ena_supported OceanAwsLaunchSpec#is_ena_supported}.

---

##### `MaxGpu`<sup>Optional</sup> <a name="MaxGpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxGpu"></a>

```go
MaxGpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#max_gpu OceanAwsLaunchSpec#max_gpu}.

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxMemoryGib"></a>

```go
MaxMemoryGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#max_memory_gib OceanAwsLaunchSpec#max_memory_gib}.

---

##### `MaxNetworkPerformance`<sup>Optional</sup> <a name="MaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxNetworkPerformance"></a>

```go
MaxNetworkPerformance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#max_network_performance OceanAwsLaunchSpec#max_network_performance}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxVcpu"></a>

```go
MaxVcpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#max_vcpu OceanAwsLaunchSpec#max_vcpu}.

---

##### `MinEnis`<sup>Optional</sup> <a name="MinEnis" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minEnis"></a>

```go
MinEnis *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#min_enis OceanAwsLaunchSpec#min_enis}.

---

##### `MinGpu`<sup>Optional</sup> <a name="MinGpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minGpu"></a>

```go
MinGpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#min_gpu OceanAwsLaunchSpec#min_gpu}.

---

##### `MinMemoryGib`<sup>Optional</sup> <a name="MinMemoryGib" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minMemoryGib"></a>

```go
MinMemoryGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#min_memory_gib OceanAwsLaunchSpec#min_memory_gib}.

---

##### `MinNetworkPerformance`<sup>Optional</sup> <a name="MinNetworkPerformance" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minNetworkPerformance"></a>

```go
MinNetworkPerformance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#min_network_performance OceanAwsLaunchSpec#min_network_performance}.

---

##### `MinVcpu`<sup>Optional</sup> <a name="MinVcpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minVcpu"></a>

```go
MinVcpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#min_vcpu OceanAwsLaunchSpec#min_vcpu}.

---

##### `RootDeviceTypes`<sup>Optional</sup> <a name="RootDeviceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.rootDeviceTypes"></a>

```go
RootDeviceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#root_device_types OceanAwsLaunchSpec#root_device_types}.

---

##### `VirtualizationTypes`<sup>Optional</sup> <a name="VirtualizationTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.virtualizationTypes"></a>

```go
VirtualizationTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#virtualization_types OceanAwsLaunchSpec#virtualization_types}.

---

### OceanAwsLaunchSpecLabels <a name="OceanAwsLaunchSpecLabels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecLabels {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}.

---

### OceanAwsLaunchSpecResourceLimits <a name="OceanAwsLaunchSpecResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecResourceLimits {
	MaxInstanceCount: *f64,
	MinInstanceCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#max_instance_count OceanAwsLaunchSpec#max_instance_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#min_instance_count OceanAwsLaunchSpec#min_instance_count}. |

---

##### `MaxInstanceCount`<sup>Optional</sup> <a name="MaxInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.property.maxInstanceCount"></a>

```go
MaxInstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#max_instance_count OceanAwsLaunchSpec#max_instance_count}.

---

##### `MinInstanceCount`<sup>Optional</sup> <a name="MinInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.property.minInstanceCount"></a>

```go
MinInstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#min_instance_count OceanAwsLaunchSpec#min_instance_count}.

---

### OceanAwsLaunchSpecSchedulingShutdownHours <a name="OceanAwsLaunchSpecSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecSchedulingShutdownHours {
	TimeWindows: *[]*string,
	IsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.property.timeWindows">TimeWindows</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#time_windows OceanAwsLaunchSpec#time_windows}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}. |

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.property.timeWindows"></a>

```go
TimeWindows *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#time_windows OceanAwsLaunchSpec#time_windows}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}.

---

### OceanAwsLaunchSpecSchedulingTask <a name="OceanAwsLaunchSpecSchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecSchedulingTask {
	CronExpression: *string,
	IsEnabled: interface{},
	TaskType: *string,
	TaskHeadroom: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.cronExpression">CronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#cron_expression OceanAwsLaunchSpec#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.taskType">TaskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#task_type OceanAwsLaunchSpec#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.taskHeadroom">TaskHeadroom</a></code> | <code>interface{}</code> | task_headroom block. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.cronExpression"></a>

```go
CronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#cron_expression OceanAwsLaunchSpec#cron_expression}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}.

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.taskType"></a>

```go
TaskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#task_type OceanAwsLaunchSpec#task_type}.

---

##### `TaskHeadroom`<sup>Optional</sup> <a name="TaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.taskHeadroom"></a>

```go
TaskHeadroom interface{}
```

- *Type:* interface{}

task_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#task_headroom OceanAwsLaunchSpec#task_headroom}

---

### OceanAwsLaunchSpecSchedulingTaskTaskHeadroom <a name="OceanAwsLaunchSpecSchedulingTaskTaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom {
	NumOfUnits: *f64,
	CpuPerUnit: *f64,
	GpuPerUnit: *f64,
	MemoryPerUnit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits">NumOfUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit">CpuPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.gpuPerUnit">GpuPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}. |

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits"></a>

```go
NumOfUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}.

---

##### `CpuPerUnit`<sup>Optional</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit"></a>

```go
CpuPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}.

---

##### `GpuPerUnit`<sup>Optional</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.gpuPerUnit"></a>

```go
GpuPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}.

---

##### `MemoryPerUnit`<sup>Optional</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit"></a>

```go
MemoryPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}.

---

### OceanAwsLaunchSpecStrategy <a name="OceanAwsLaunchSpecStrategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecStrategy {
	SpotPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.property.spotPercentage">SpotPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#spot_percentage OceanAwsLaunchSpec#spot_percentage}. |

---

##### `SpotPercentage`<sup>Optional</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.property.spotPercentage"></a>

```go
SpotPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#spot_percentage OceanAwsLaunchSpec#spot_percentage}.

---

### OceanAwsLaunchSpecTags <a name="OceanAwsLaunchSpecTags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}.

---

### OceanAwsLaunchSpecTaints <a name="OceanAwsLaunchSpecTaints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecTaints {
	Effect: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.effect">Effect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#effect OceanAwsLaunchSpec#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#effect OceanAwsLaunchSpec#effect}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}.

---

### OceanAwsLaunchSpecUpdatePolicy <a name="OceanAwsLaunchSpecUpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecUpdatePolicy {
	ShouldRoll: interface{},
	RollConfig: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.property.shouldRoll">ShouldRoll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#should_roll OceanAwsLaunchSpec#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.property.shouldRoll"></a>

```go
ShouldRoll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#should_roll OceanAwsLaunchSpec#should_roll}.

---

##### `RollConfig`<sup>Optional</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.property.rollConfig"></a>

```go
RollConfig OceanAwsLaunchSpecUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#roll_config OceanAwsLaunchSpec#roll_config}

---

### OceanAwsLaunchSpecUpdatePolicyRollConfig <a name="OceanAwsLaunchSpecUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

&oceanawslaunchspec.OceanAwsLaunchSpecUpdatePolicyRollConfig {
	BatchSizePercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#batch_size_percentage OceanAwsLaunchSpec#batch_size_percentage}. |

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```go
BatchSizePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.175.0/docs/resources/ocean_aws_launch_spec#batch_size_percentage OceanAwsLaunchSpec#batch_size_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAwsLaunchSpecAutoscaleDownList <a name="OceanAwsLaunchSpecAutoscaleDownList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecAutoscaleDownList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecAutoscaleDownList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecAutoscaleDownOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecAutoscaleDownOutputReference <a name="OceanAwsLaunchSpecAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecAutoscaleDownOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecAutoscaleDownOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resetMaxScaleDownPercentage">ResetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxScaleDownPercentage` <a name="ResetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```go
func ResetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">MaxScaleDownPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxScaleDownPercentageInput`<sup>Optional</sup> <a name="MaxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```go
func MaxScaleDownPercentageInput() *f64
```

- *Type:* *f64

---

##### `MaxScaleDownPercentage`<sup>Required</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```go
func MaxScaleDownPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList <a name="OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference <a name="OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resetAutoHeadroomPercentage">ResetAutoHeadroomPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoHeadroomPercentage` <a name="ResetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resetAutoHeadroomPercentage"></a>

```go
func ResetAutoHeadroomPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentageInput">AutoHeadroomPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoHeadroomPercentageInput`<sup>Optional</sup> <a name="AutoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentageInput"></a>

```go
func AutoHeadroomPercentageInput() *f64
```

- *Type:* *f64

---

##### `AutoHeadroomPercentage`<sup>Required</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentage"></a>

```go
func AutoHeadroomPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecAutoscaleHeadroomsList <a name="OceanAwsLaunchSpecAutoscaleHeadroomsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecAutoscaleHeadroomsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecAutoscaleHeadroomsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference <a name="OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecAutoscaleHeadroomsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit">ResetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetGpuPerUnit">ResetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit">ResetMemoryPerUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPerUnit` <a name="ResetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit"></a>

```go
func ResetCpuPerUnit()
```

##### `ResetGpuPerUnit` <a name="ResetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetGpuPerUnit"></a>

```go
func ResetGpuPerUnit()
```

##### `ResetMemoryPerUnit` <a name="ResetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit"></a>

```go
func ResetMemoryPerUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput">CpuPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnitInput">GpuPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput">MemoryPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput">NumOfUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit">CpuPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnit">GpuPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits">NumOfUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuPerUnitInput`<sup>Optional</sup> <a name="CpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput"></a>

```go
func CpuPerUnitInput() *f64
```

- *Type:* *f64

---

##### `GpuPerUnitInput`<sup>Optional</sup> <a name="GpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnitInput"></a>

```go
func GpuPerUnitInput() *f64
```

- *Type:* *f64

---

##### `MemoryPerUnitInput`<sup>Optional</sup> <a name="MemoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput"></a>

```go
func MemoryPerUnitInput() *f64
```

- *Type:* *f64

---

##### `NumOfUnitsInput`<sup>Optional</sup> <a name="NumOfUnitsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput"></a>

```go
func NumOfUnitsInput() *f64
```

- *Type:* *f64

---

##### `CpuPerUnit`<sup>Required</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit"></a>

```go
func CpuPerUnit() *f64
```

- *Type:* *f64

---

##### `GpuPerUnit`<sup>Required</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnit"></a>

```go
func GpuPerUnit() *f64
```

- *Type:* *f64

---

##### `MemoryPerUnit`<sup>Required</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit"></a>

```go
func MemoryPerUnit() *f64
```

- *Type:* *f64

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits"></a>

```go
func NumOfUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference <a name="OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput">BaseSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput">SizePerResourceUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize">BaseSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit">SizePerResourceUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseSizeInput`<sup>Optional</sup> <a name="BaseSizeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput"></a>

```go
func BaseSizeInput() *f64
```

- *Type:* *f64

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `SizePerResourceUnitInput`<sup>Optional</sup> <a name="SizePerResourceUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput"></a>

```go
func SizePerResourceUnitInput() *f64
```

- *Type:* *f64

---

##### `BaseSize`<sup>Required</sup> <a name="BaseSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize"></a>

```go
func BaseSize() *f64
```

- *Type:* *f64

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `SizePerResourceUnit`<sup>Required</sup> <a name="SizePerResourceUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit"></a>

```go
func SizePerResourceUnit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

---


### OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference <a name="OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize">PutDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize">ResetDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicVolumeSize` <a name="PutDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize"></a>

```go
func PutDynamicVolumeSize(value OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetDynamicVolumeSize` <a name="ResetDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize"></a>

```go
func ResetDynamicVolumeSize()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize">DynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput">DynamicVolumeSizeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicVolumeSize`<sup>Required</sup> <a name="DynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize"></a>

```go
func DynamicVolumeSize() OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a>

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `DynamicVolumeSizeInput`<sup>Optional</sup> <a name="DynamicVolumeSizeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput"></a>

```go
func DynamicVolumeSizeInput() OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() interface{}
```

- *Type:* interface{}

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsLaunchSpecBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a>

---


### OceanAwsLaunchSpecBlockDeviceMappingsList <a name="OceanAwsLaunchSpecBlockDeviceMappingsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecBlockDeviceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecBlockDeviceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecBlockDeviceMappingsOutputReference <a name="OceanAwsLaunchSpecBlockDeviceMappingsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecBlockDeviceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecBlockDeviceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.putEbs"></a>

```go
func PutEbs(value OceanAwsLaunchSpecBlockDeviceMappingsEbs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetEbs"></a>

```go
func ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```go
func ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```go
func ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference">OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.ebs"></a>

```go
func Ebs() OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference">OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```go
func EbsInput() OceanAwsLaunchSpecBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a>

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```go
func NoDeviceInput() *string
```

- *Type:* *string

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```go
func VirtualNameInput() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.noDevice"></a>

```go
func NoDevice() *string
```

- *Type:* *string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecCreateOptionsOutputReference <a name="OceanAwsLaunchSpecCreateOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecCreateOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsLaunchSpecCreateOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resetInitialNodes">ResetInitialNodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInitialNodes` <a name="ResetInitialNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resetInitialNodes"></a>

```go
func ResetInitialNodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.initialNodesInput">InitialNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.initialNodes">InitialNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InitialNodesInput`<sup>Optional</sup> <a name="InitialNodesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.initialNodesInput"></a>

```go
func InitialNodesInput() *f64
```

- *Type:* *f64

---

##### `InitialNodes`<sup>Required</sup> <a name="InitialNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.initialNodes"></a>

```go
func InitialNodes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsLaunchSpecCreateOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a>

---


### OceanAwsLaunchSpecDeleteOptionsOutputReference <a name="OceanAwsLaunchSpecDeleteOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecDeleteOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsLaunchSpecDeleteOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resetDeleteNodes">ResetDeleteNodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteNodes` <a name="ResetDeleteNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resetDeleteNodes"></a>

```go
func ResetDeleteNodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.deleteNodesInput">DeleteNodesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.deleteNodes">DeleteNodes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteNodesInput`<sup>Optional</sup> <a name="DeleteNodesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.deleteNodesInput"></a>

```go
func DeleteNodesInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteNodes`<sup>Required</sup> <a name="DeleteNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.deleteNodes"></a>

```go
func DeleteNodes() interface{}
```

- *Type:* interface{}

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsLaunchSpecDeleteOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a>

---


### OceanAwsLaunchSpecElasticIpPoolList <a name="OceanAwsLaunchSpecElasticIpPoolList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecElasticIpPoolList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecElasticIpPoolList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecElasticIpPoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecElasticIpPoolOutputReference <a name="OceanAwsLaunchSpecElasticIpPoolOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecElasticIpPoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecElasticIpPoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.putTagSelector">PutTagSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resetTagSelector">ResetTagSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagSelector` <a name="PutTagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.putTagSelector"></a>

```go
func PutTagSelector(value OceanAwsLaunchSpecElasticIpPoolTagSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.putTagSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a>

---

##### `ResetTagSelector` <a name="ResetTagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resetTagSelector"></a>

```go
func ResetTagSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.tagSelector">TagSelector</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference">OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.tagSelectorInput">TagSelectorInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagSelector`<sup>Required</sup> <a name="TagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.tagSelector"></a>

```go
func TagSelector() OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference">OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference</a>

---

##### `TagSelectorInput`<sup>Optional</sup> <a name="TagSelectorInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.tagSelectorInput"></a>

```go
func TagSelectorInput() OceanAwsLaunchSpecElasticIpPoolTagSelector
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference <a name="OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resetTagValue"></a>

```go
func ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagValueInput"></a>

```go
func TagValueInput() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsLaunchSpecElasticIpPoolTagSelector
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a>

---


### OceanAwsLaunchSpecEphemeralStorageList <a name="OceanAwsLaunchSpecEphemeralStorageList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecEphemeralStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecEphemeralStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecEphemeralStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecEphemeralStorageOutputReference <a name="OceanAwsLaunchSpecEphemeralStorageOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecEphemeralStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecEphemeralStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.resetEphemeralStorageDeviceName">ResetEphemeralStorageDeviceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEphemeralStorageDeviceName` <a name="ResetEphemeralStorageDeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.resetEphemeralStorageDeviceName"></a>

```go
func ResetEphemeralStorageDeviceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.ephemeralStorageDeviceNameInput">EphemeralStorageDeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.ephemeralStorageDeviceName">EphemeralStorageDeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EphemeralStorageDeviceNameInput`<sup>Optional</sup> <a name="EphemeralStorageDeviceNameInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.ephemeralStorageDeviceNameInput"></a>

```go
func EphemeralStorageDeviceNameInput() *string
```

- *Type:* *string

---

##### `EphemeralStorageDeviceName`<sup>Required</sup> <a name="EphemeralStorageDeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.ephemeralStorageDeviceName"></a>

```go
func EphemeralStorageDeviceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecImagesList <a name="OceanAwsLaunchSpecImagesList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecImagesOutputReference <a name="OceanAwsLaunchSpecImagesOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.resetImageId">ResetImageId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.resetImageId"></a>

```go
func ResetImageId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference <a name="OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecInstanceMetadataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```go
func ResetHttpPutResponseHopLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```go
func HttpPutResponseHopLimitInput() *f64
```

- *Type:* *f64

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```go
func HttpTokensInput() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsLaunchSpecInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a>

---


### OceanAwsLaunchSpecInstanceTypesFiltersOutputReference <a name="OceanAwsLaunchSpecInstanceTypesFiltersOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecInstanceTypesFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsLaunchSpecInstanceTypesFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetDiskTypes">ResetDiskTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetExcludeFamilies">ResetExcludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetExcludeMetal">ResetExcludeMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetHypervisor">ResetHypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetIncludeFamilies">ResetIncludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetIsEnaSupported">ResetIsEnaSupported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxGpu">ResetMaxGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxNetworkPerformance">ResetMaxNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinEnis">ResetMinEnis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinGpu">ResetMinGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinMemoryGib">ResetMinMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinNetworkPerformance">ResetMinNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinVcpu">ResetMinVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetRootDeviceTypes">ResetRootDeviceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetVirtualizationTypes">ResetVirtualizationTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetCategories"></a>

```go
func ResetCategories()
```

##### `ResetDiskTypes` <a name="ResetDiskTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetDiskTypes"></a>

```go
func ResetDiskTypes()
```

##### `ResetExcludeFamilies` <a name="ResetExcludeFamilies" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetExcludeFamilies"></a>

```go
func ResetExcludeFamilies()
```

##### `ResetExcludeMetal` <a name="ResetExcludeMetal" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetExcludeMetal"></a>

```go
func ResetExcludeMetal()
```

##### `ResetHypervisor` <a name="ResetHypervisor" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetHypervisor"></a>

```go
func ResetHypervisor()
```

##### `ResetIncludeFamilies` <a name="ResetIncludeFamilies" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetIncludeFamilies"></a>

```go
func ResetIncludeFamilies()
```

##### `ResetIsEnaSupported` <a name="ResetIsEnaSupported" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetIsEnaSupported"></a>

```go
func ResetIsEnaSupported()
```

##### `ResetMaxGpu` <a name="ResetMaxGpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxGpu"></a>

```go
func ResetMaxGpu()
```

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxMemoryGib"></a>

```go
func ResetMaxMemoryGib()
```

##### `ResetMaxNetworkPerformance` <a name="ResetMaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxNetworkPerformance"></a>

```go
func ResetMaxNetworkPerformance()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxVcpu"></a>

```go
func ResetMaxVcpu()
```

##### `ResetMinEnis` <a name="ResetMinEnis" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinEnis"></a>

```go
func ResetMinEnis()
```

##### `ResetMinGpu` <a name="ResetMinGpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinGpu"></a>

```go
func ResetMinGpu()
```

##### `ResetMinMemoryGib` <a name="ResetMinMemoryGib" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinMemoryGib"></a>

```go
func ResetMinMemoryGib()
```

##### `ResetMinNetworkPerformance` <a name="ResetMinNetworkPerformance" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinNetworkPerformance"></a>

```go
func ResetMinNetworkPerformance()
```

##### `ResetMinVcpu` <a name="ResetMinVcpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinVcpu"></a>

```go
func ResetMinVcpu()
```

##### `ResetRootDeviceTypes` <a name="ResetRootDeviceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetRootDeviceTypes"></a>

```go
func ResetRootDeviceTypes()
```

##### `ResetVirtualizationTypes` <a name="ResetVirtualizationTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetVirtualizationTypes"></a>

```go
func ResetVirtualizationTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.categoriesInput">CategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.diskTypesInput">DiskTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeFamiliesInput">ExcludeFamiliesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeMetalInput">ExcludeMetalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.hypervisorInput">HypervisorInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.includeFamiliesInput">IncludeFamiliesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.isEnaSupportedInput">IsEnaSupportedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxGpuInput">MaxGpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxNetworkPerformanceInput">MaxNetworkPerformanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minEnisInput">MinEnisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minGpuInput">MinGpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minMemoryGibInput">MinMemoryGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minNetworkPerformanceInput">MinNetworkPerformanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minVcpuInput">MinVcpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.rootDeviceTypesInput">RootDeviceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.virtualizationTypesInput">VirtualizationTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.categories">Categories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.diskTypes">DiskTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeFamilies">ExcludeFamilies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeMetal">ExcludeMetal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.hypervisor">Hypervisor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.includeFamilies">IncludeFamilies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.isEnaSupported">IsEnaSupported</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxGpu">MaxGpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxNetworkPerformance">MaxNetworkPerformance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minEnis">MinEnis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minGpu">MinGpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minMemoryGib">MinMemoryGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minNetworkPerformance">MinNetworkPerformance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minVcpu">MinVcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.rootDeviceTypes">RootDeviceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.virtualizationTypes">VirtualizationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.categoriesInput"></a>

```go
func CategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DiskTypesInput`<sup>Optional</sup> <a name="DiskTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.diskTypesInput"></a>

```go
func DiskTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeFamiliesInput`<sup>Optional</sup> <a name="ExcludeFamiliesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeFamiliesInput"></a>

```go
func ExcludeFamiliesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeMetalInput`<sup>Optional</sup> <a name="ExcludeMetalInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeMetalInput"></a>

```go
func ExcludeMetalInput() interface{}
```

- *Type:* interface{}

---

##### `HypervisorInput`<sup>Optional</sup> <a name="HypervisorInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.hypervisorInput"></a>

```go
func HypervisorInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeFamiliesInput`<sup>Optional</sup> <a name="IncludeFamiliesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.includeFamiliesInput"></a>

```go
func IncludeFamiliesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnaSupportedInput`<sup>Optional</sup> <a name="IsEnaSupportedInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.isEnaSupportedInput"></a>

```go
func IsEnaSupportedInput() *string
```

- *Type:* *string

---

##### `MaxGpuInput`<sup>Optional</sup> <a name="MaxGpuInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxGpuInput"></a>

```go
func MaxGpuInput() *f64
```

- *Type:* *f64

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxMemoryGibInput"></a>

```go
func MaxMemoryGibInput() *f64
```

- *Type:* *f64

---

##### `MaxNetworkPerformanceInput`<sup>Optional</sup> <a name="MaxNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxNetworkPerformanceInput"></a>

```go
func MaxNetworkPerformanceInput() *f64
```

- *Type:* *f64

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxVcpuInput"></a>

```go
func MaxVcpuInput() *f64
```

- *Type:* *f64

---

##### `MinEnisInput`<sup>Optional</sup> <a name="MinEnisInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minEnisInput"></a>

```go
func MinEnisInput() *f64
```

- *Type:* *f64

---

##### `MinGpuInput`<sup>Optional</sup> <a name="MinGpuInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minGpuInput"></a>

```go
func MinGpuInput() *f64
```

- *Type:* *f64

---

##### `MinMemoryGibInput`<sup>Optional</sup> <a name="MinMemoryGibInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minMemoryGibInput"></a>

```go
func MinMemoryGibInput() *f64
```

- *Type:* *f64

---

##### `MinNetworkPerformanceInput`<sup>Optional</sup> <a name="MinNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minNetworkPerformanceInput"></a>

```go
func MinNetworkPerformanceInput() *f64
```

- *Type:* *f64

---

##### `MinVcpuInput`<sup>Optional</sup> <a name="MinVcpuInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minVcpuInput"></a>

```go
func MinVcpuInput() *f64
```

- *Type:* *f64

---

##### `RootDeviceTypesInput`<sup>Optional</sup> <a name="RootDeviceTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.rootDeviceTypesInput"></a>

```go
func RootDeviceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualizationTypesInput`<sup>Optional</sup> <a name="VirtualizationTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.virtualizationTypesInput"></a>

```go
func VirtualizationTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.categories"></a>

```go
func Categories() *[]*string
```

- *Type:* *[]*string

---

##### `DiskTypes`<sup>Required</sup> <a name="DiskTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.diskTypes"></a>

```go
func DiskTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeFamilies`<sup>Required</sup> <a name="ExcludeFamilies" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeFamilies"></a>

```go
func ExcludeFamilies() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeMetal`<sup>Required</sup> <a name="ExcludeMetal" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeMetal"></a>

```go
func ExcludeMetal() interface{}
```

- *Type:* interface{}

---

##### `Hypervisor`<sup>Required</sup> <a name="Hypervisor" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.hypervisor"></a>

```go
func Hypervisor() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeFamilies`<sup>Required</sup> <a name="IncludeFamilies" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.includeFamilies"></a>

```go
func IncludeFamilies() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnaSupported`<sup>Required</sup> <a name="IsEnaSupported" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.isEnaSupported"></a>

```go
func IsEnaSupported() *string
```

- *Type:* *string

---

##### `MaxGpu`<sup>Required</sup> <a name="MaxGpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxGpu"></a>

```go
func MaxGpu() *f64
```

- *Type:* *f64

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxMemoryGib"></a>

```go
func MaxMemoryGib() *f64
```

- *Type:* *f64

---

##### `MaxNetworkPerformance`<sup>Required</sup> <a name="MaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxNetworkPerformance"></a>

```go
func MaxNetworkPerformance() *f64
```

- *Type:* *f64

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxVcpu"></a>

```go
func MaxVcpu() *f64
```

- *Type:* *f64

---

##### `MinEnis`<sup>Required</sup> <a name="MinEnis" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minEnis"></a>

```go
func MinEnis() *f64
```

- *Type:* *f64

---

##### `MinGpu`<sup>Required</sup> <a name="MinGpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minGpu"></a>

```go
func MinGpu() *f64
```

- *Type:* *f64

---

##### `MinMemoryGib`<sup>Required</sup> <a name="MinMemoryGib" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minMemoryGib"></a>

```go
func MinMemoryGib() *f64
```

- *Type:* *f64

---

##### `MinNetworkPerformance`<sup>Required</sup> <a name="MinNetworkPerformance" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minNetworkPerformance"></a>

```go
func MinNetworkPerformance() *f64
```

- *Type:* *f64

---

##### `MinVcpu`<sup>Required</sup> <a name="MinVcpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minVcpu"></a>

```go
func MinVcpu() *f64
```

- *Type:* *f64

---

##### `RootDeviceTypes`<sup>Required</sup> <a name="RootDeviceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.rootDeviceTypes"></a>

```go
func RootDeviceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualizationTypes`<sup>Required</sup> <a name="VirtualizationTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.virtualizationTypes"></a>

```go
func VirtualizationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsLaunchSpecInstanceTypesFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a>

---


### OceanAwsLaunchSpecLabelsList <a name="OceanAwsLaunchSpecLabelsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecLabelsOutputReference <a name="OceanAwsLaunchSpecLabelsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecResourceLimitsList <a name="OceanAwsLaunchSpecResourceLimitsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecResourceLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecResourceLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecResourceLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecResourceLimitsOutputReference <a name="OceanAwsLaunchSpecResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecResourceLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecResourceLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resetMaxInstanceCount">ResetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resetMinInstanceCount">ResetMinInstanceCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInstanceCount` <a name="ResetMaxInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resetMaxInstanceCount"></a>

```go
func ResetMaxInstanceCount()
```

##### `ResetMinInstanceCount` <a name="ResetMinInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resetMinInstanceCount"></a>

```go
func ResetMinInstanceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.maxInstanceCountInput"></a>

```go
func MaxInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.minInstanceCountInput"></a>

```go
func MinInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference <a name="OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecSchedulingShutdownHoursOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.timeWindowsInput">TimeWindowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.timeWindows">TimeWindows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeWindowsInput`<sup>Optional</sup> <a name="TimeWindowsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.timeWindowsInput"></a>

```go
func TimeWindowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.timeWindows"></a>

```go
func TimeWindows() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsLaunchSpecSchedulingShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a>

---


### OceanAwsLaunchSpecSchedulingTaskList <a name="OceanAwsLaunchSpecSchedulingTaskList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecSchedulingTaskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecSchedulingTaskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecSchedulingTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecSchedulingTaskOutputReference <a name="OceanAwsLaunchSpecSchedulingTaskOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecSchedulingTaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecSchedulingTaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom">PutTaskHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom">ResetTaskHeadroom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTaskHeadroom` <a name="PutTaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom"></a>

```go
func PutTaskHeadroom(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTaskHeadroom` <a name="ResetTaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom"></a>

```go
func ResetTaskHeadroom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom">TaskHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList">OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput">TaskHeadroomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskType">TaskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TaskHeadroom`<sup>Required</sup> <a name="TaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom"></a>

```go
func TaskHeadroom() OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList">OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList</a>

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput"></a>

```go
func CronExpressionInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TaskHeadroomInput`<sup>Optional</sup> <a name="TaskHeadroomInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput"></a>

```go
func TaskHeadroomInput() interface{}
```

- *Type:* interface{}

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput"></a>

```go
func TaskTypeInput() *string
```

- *Type:* *string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskType"></a>

```go
func TaskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList <a name="OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecSchedulingTaskTaskHeadroomList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference <a name="OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit">ResetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetGpuPerUnit">ResetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit">ResetMemoryPerUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPerUnit` <a name="ResetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit"></a>

```go
func ResetCpuPerUnit()
```

##### `ResetGpuPerUnit` <a name="ResetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetGpuPerUnit"></a>

```go
func ResetGpuPerUnit()
```

##### `ResetMemoryPerUnit` <a name="ResetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit"></a>

```go
func ResetMemoryPerUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput">CpuPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnitInput">GpuPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput">MemoryPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput">NumOfUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit">CpuPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnit">GpuPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits">NumOfUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuPerUnitInput`<sup>Optional</sup> <a name="CpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput"></a>

```go
func CpuPerUnitInput() *f64
```

- *Type:* *f64

---

##### `GpuPerUnitInput`<sup>Optional</sup> <a name="GpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnitInput"></a>

```go
func GpuPerUnitInput() *f64
```

- *Type:* *f64

---

##### `MemoryPerUnitInput`<sup>Optional</sup> <a name="MemoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput"></a>

```go
func MemoryPerUnitInput() *f64
```

- *Type:* *f64

---

##### `NumOfUnitsInput`<sup>Optional</sup> <a name="NumOfUnitsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput"></a>

```go
func NumOfUnitsInput() *f64
```

- *Type:* *f64

---

##### `CpuPerUnit`<sup>Required</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit"></a>

```go
func CpuPerUnit() *f64
```

- *Type:* *f64

---

##### `GpuPerUnit`<sup>Required</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnit"></a>

```go
func GpuPerUnit() *f64
```

- *Type:* *f64

---

##### `MemoryPerUnit`<sup>Required</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit"></a>

```go
func MemoryPerUnit() *f64
```

- *Type:* *f64

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits"></a>

```go
func NumOfUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecStrategyList <a name="OceanAwsLaunchSpecStrategyList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecStrategyOutputReference <a name="OceanAwsLaunchSpecStrategyOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resetSpotPercentage">ResetSpotPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpotPercentage` <a name="ResetSpotPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resetSpotPercentage"></a>

```go
func ResetSpotPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.spotPercentageInput">SpotPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.spotPercentage">SpotPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpotPercentageInput`<sup>Optional</sup> <a name="SpotPercentageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.spotPercentageInput"></a>

```go
func SpotPercentageInput() *f64
```

- *Type:* *f64

---

##### `SpotPercentage`<sup>Required</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.spotPercentage"></a>

```go
func SpotPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecTagsList <a name="OceanAwsLaunchSpecTagsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecTagsOutputReference <a name="OceanAwsLaunchSpecTagsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecTaintsList <a name="OceanAwsLaunchSpecTaintsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecTaintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAwsLaunchSpecTaintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.get"></a>

```go
func Get(index *f64) OceanAwsLaunchSpecTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecTaintsOutputReference <a name="OceanAwsLaunchSpecTaintsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecTaintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAwsLaunchSpecTaintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAwsLaunchSpecUpdatePolicyOutputReference <a name="OceanAwsLaunchSpecUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsLaunchSpecUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.putRollConfig">PutRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resetRollConfig">ResetRollConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRollConfig` <a name="PutRollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.putRollConfig"></a>

```go
func PutRollConfig(value OceanAwsLaunchSpecUpdatePolicyRollConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a>

---

##### `ResetRollConfig` <a name="ResetRollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resetRollConfig"></a>

```go
func ResetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference">OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.rollConfigInput">RollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.shouldRollInput">ShouldRollInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.shouldRoll">ShouldRoll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RollConfig`<sup>Required</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.rollConfig"></a>

```go
func RollConfig() OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference">OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference</a>

---

##### `RollConfigInput`<sup>Optional</sup> <a name="RollConfigInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.rollConfigInput"></a>

```go
func RollConfigInput() OceanAwsLaunchSpecUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a>

---

##### `ShouldRollInput`<sup>Optional</sup> <a name="ShouldRollInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.shouldRollInput"></a>

```go
func ShouldRollInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.shouldRoll"></a>

```go
func ShouldRoll() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsLaunchSpecUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a>

---


### OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference <a name="OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanawslaunchspec"

oceanawslaunchspec.NewOceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```go
func BatchSizePercentageInput() *f64
```

- *Type:* *f64

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```go
func BatchSizePercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAwsLaunchSpecUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a>

---




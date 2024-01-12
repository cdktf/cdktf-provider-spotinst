# `managedInstanceAws` Submodule <a name="`managedInstanceAws` Submodule" id="@cdktf/provider-spotinst.managedInstanceAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedInstanceAws <a name="ManagedInstanceAws" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws spotinst_managed_instance_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAws(scope Construct, id *string, config ManagedInstanceAwsConfig) ManagedInstanceAws
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig">ManagedInstanceAwsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig">ManagedInstanceAwsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putDelete">PutDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putIntegrationRoute53">PutIntegrationRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putLoadBalancers">PutLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putManagedInstanceAction">PutManagedInstanceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putResourceTagSpecification">PutResourceTagSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putRevertToSpot">PutRevertToSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putScheduledTask">PutScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetAutoHealing">ResetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetBlockDevicesMode">ResetBlockDevicesMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetCpuCredits">ResetCpuCredits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetDrainingTimeout">ResetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetElasticIp">ResetElasticIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetEnableMonitoring">ResetEnableMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetFallbackToOndemand">ResetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetHealthCheckType">ResetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetIntegrationRoute53">ResetIntegrationRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetKeyPair">ResetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetLifeCycle">ResetLifeCycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetLoadBalancers">ResetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetManagedInstanceAction">ResetManagedInstanceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetMinimumInstanceLifetime">ResetMinimumInstanceLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetOptimizationWindows">ResetOptimizationWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetOrientation">ResetOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPersistPrivateIp">ResetPersistPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPersistRootDevice">ResetPersistRootDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPlacementTenancy">ResetPlacementTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPreferredType">ResetPreferredType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetResourceTagSpecification">ResetResourceTagSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetRevertToSpot">ResetRevertToSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetScheduledTask">ResetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetShutdownScript">ResetShutdownScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetUnhealthyDuration">ResetUnhealthyDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetUtilizeReservedInstances">ResetUtilizeReservedInstances</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putBlockDeviceMappings"></a>

```go
func PutBlockDeviceMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putBlockDeviceMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDelete` <a name="PutDelete" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putDelete"></a>

```go
func PutDelete(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putDelete.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIntegrationRoute53` <a name="PutIntegrationRoute53" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putIntegrationRoute53"></a>

```go
func PutIntegrationRoute53(value ManagedInstanceAwsIntegrationRoute53)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putIntegrationRoute53.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a>

---

##### `PutLoadBalancers` <a name="PutLoadBalancers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putLoadBalancers"></a>

```go
func PutLoadBalancers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putLoadBalancers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagedInstanceAction` <a name="PutManagedInstanceAction" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putManagedInstanceAction"></a>

```go
func PutManagedInstanceAction(value ManagedInstanceAwsManagedInstanceAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putManagedInstanceAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceTagSpecification` <a name="PutResourceTagSpecification" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putResourceTagSpecification"></a>

```go
func PutResourceTagSpecification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putResourceTagSpecification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRevertToSpot` <a name="PutRevertToSpot" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putRevertToSpot"></a>

```go
func PutRevertToSpot(value ManagedInstanceAwsRevertToSpot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putRevertToSpot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a>

---

##### `PutScheduledTask` <a name="PutScheduledTask" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putScheduledTask"></a>

```go
func PutScheduledTask(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putScheduledTask.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoHealing` <a name="ResetAutoHealing" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetAutoHealing"></a>

```go
func ResetAutoHealing()
```

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetBlockDeviceMappings"></a>

```go
func ResetBlockDeviceMappings()
```

##### `ResetBlockDevicesMode` <a name="ResetBlockDevicesMode" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetBlockDevicesMode"></a>

```go
func ResetBlockDevicesMode()
```

##### `ResetCpuCredits` <a name="ResetCpuCredits" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetCpuCredits"></a>

```go
func ResetCpuCredits()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDrainingTimeout` <a name="ResetDrainingTimeout" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetDrainingTimeout"></a>

```go
func ResetDrainingTimeout()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetEbsOptimized"></a>

```go
func ResetEbsOptimized()
```

##### `ResetElasticIp` <a name="ResetElasticIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetElasticIp"></a>

```go
func ResetElasticIp()
```

##### `ResetEnableMonitoring` <a name="ResetEnableMonitoring" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetEnableMonitoring"></a>

```go
func ResetEnableMonitoring()
```

##### `ResetFallbackToOndemand` <a name="ResetFallbackToOndemand" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetFallbackToOndemand"></a>

```go
func ResetFallbackToOndemand()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetGracePeriod"></a>

```go
func ResetGracePeriod()
```

##### `ResetHealthCheckType` <a name="ResetHealthCheckType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetHealthCheckType"></a>

```go
func ResetHealthCheckType()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetIamInstanceProfile"></a>

```go
func ResetIamInstanceProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegrationRoute53` <a name="ResetIntegrationRoute53" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetIntegrationRoute53"></a>

```go
func ResetIntegrationRoute53()
```

##### `ResetKeyPair` <a name="ResetKeyPair" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetKeyPair"></a>

```go
func ResetKeyPair()
```

##### `ResetLifeCycle` <a name="ResetLifeCycle" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetLifeCycle"></a>

```go
func ResetLifeCycle()
```

##### `ResetLoadBalancers` <a name="ResetLoadBalancers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetLoadBalancers"></a>

```go
func ResetLoadBalancers()
```

##### `ResetManagedInstanceAction` <a name="ResetManagedInstanceAction" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetManagedInstanceAction"></a>

```go
func ResetManagedInstanceAction()
```

##### `ResetMinimumInstanceLifetime` <a name="ResetMinimumInstanceLifetime" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetMinimumInstanceLifetime"></a>

```go
func ResetMinimumInstanceLifetime()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetNetworkInterface"></a>

```go
func ResetNetworkInterface()
```

##### `ResetOptimizationWindows` <a name="ResetOptimizationWindows" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetOptimizationWindows"></a>

```go
func ResetOptimizationWindows()
```

##### `ResetOrientation` <a name="ResetOrientation" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetOrientation"></a>

```go
func ResetOrientation()
```

##### `ResetPersistPrivateIp` <a name="ResetPersistPrivateIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPersistPrivateIp"></a>

```go
func ResetPersistPrivateIp()
```

##### `ResetPersistRootDevice` <a name="ResetPersistRootDevice" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPersistRootDevice"></a>

```go
func ResetPersistRootDevice()
```

##### `ResetPlacementTenancy` <a name="ResetPlacementTenancy" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPlacementTenancy"></a>

```go
func ResetPlacementTenancy()
```

##### `ResetPreferredType` <a name="ResetPreferredType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPreferredType"></a>

```go
func ResetPreferredType()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResourceTagSpecification` <a name="ResetResourceTagSpecification" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetResourceTagSpecification"></a>

```go
func ResetResourceTagSpecification()
```

##### `ResetRevertToSpot` <a name="ResetRevertToSpot" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetRevertToSpot"></a>

```go
func ResetRevertToSpot()
```

##### `ResetScheduledTask` <a name="ResetScheduledTask" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetScheduledTask"></a>

```go
func ResetScheduledTask()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetShutdownScript` <a name="ResetShutdownScript" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetShutdownScript"></a>

```go
func ResetShutdownScript()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUnhealthyDuration` <a name="ResetUnhealthyDuration" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetUnhealthyDuration"></a>

```go
func ResetUnhealthyDuration()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetUserData"></a>

```go
func ResetUserData()
```

##### `ResetUtilizeReservedInstances` <a name="ResetUtilizeReservedInstances" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetUtilizeReservedInstances"></a>

```go
func ResetUtilizeReservedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedInstanceAws resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.ManagedInstanceAws_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.ManagedInstanceAws_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.ManagedInstanceAws_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.ManagedInstanceAws_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagedInstanceAws resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedInstanceAws to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedInstanceAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagedInstanceAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList">ManagedInstanceAwsBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.delete">Delete</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList">ManagedInstanceAwsDeleteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.integrationRoute53">IntegrationRoute53</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference">ManagedInstanceAwsIntegrationRoute53OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.loadBalancers">LoadBalancers</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList">ManagedInstanceAwsLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.managedInstanceAction">ManagedInstanceAction</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference">ManagedInstanceAwsManagedInstanceActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList">ManagedInstanceAwsNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.resourceTagSpecification">ResourceTagSpecification</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList">ManagedInstanceAwsResourceTagSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.revertToSpot">RevertToSpot</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference">ManagedInstanceAwsRevertToSpotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.scheduledTask">ScheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList">ManagedInstanceAwsScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList">ManagedInstanceAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.autoHealingInput">AutoHealingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDevicesModeInput">BlockDevicesModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.cpuCreditsInput">CpuCreditsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.deleteInput">DeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.drainingTimeoutInput">DrainingTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.elasticIpInput">ElasticIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.enableMonitoringInput">EnableMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.fallbackToOndemandInput">FallbackToOndemandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.gracePeriodInput">GracePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.healthCheckTypeInput">HealthCheckTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.instanceTypesInput">InstanceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.integrationRoute53Input">IntegrationRoute53Input</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.keyPairInput">KeyPairInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.lifeCycleInput">LifeCycleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.loadBalancersInput">LoadBalancersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.managedInstanceActionInput">ManagedInstanceActionInput</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.minimumInstanceLifetimeInput">MinimumInstanceLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.optimizationWindowsInput">OptimizationWindowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.orientationInput">OrientationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistBlockDevicesInput">PersistBlockDevicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistPrivateIpInput">PersistPrivateIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistRootDeviceInput">PersistRootDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.placementTenancyInput">PlacementTenancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.preferredTypeInput">PreferredTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.resourceTagSpecificationInput">ResourceTagSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.revertToSpotInput">RevertToSpotInput</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.scheduledTaskInput">ScheduledTaskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.shutdownScriptInput">ShutdownScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.unhealthyDurationInput">UnhealthyDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.utilizeReservedInstancesInput">UtilizeReservedInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.autoHealing">AutoHealing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDevicesMode">BlockDevicesMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.drainingTimeout">DrainingTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.elasticIp">ElasticIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.enableMonitoring">EnableMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.healthCheckType">HealthCheckType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.instanceTypes">InstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.keyPair">KeyPair</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.lifeCycle">LifeCycle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.minimumInstanceLifetime">MinimumInstanceLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.optimizationWindows">OptimizationWindows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.orientation">Orientation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistBlockDevices">PersistBlockDevices</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistPrivateIp">PersistPrivateIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistRootDevice">PersistRootDevice</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.placementTenancy">PlacementTenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.preferredType">PreferredType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.shutdownScript">ShutdownScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.unhealthyDuration">UnhealthyDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.utilizeReservedInstances">UtilizeReservedInstances</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDeviceMappings"></a>

```go
func BlockDeviceMappings() ManagedInstanceAwsBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList">ManagedInstanceAwsBlockDeviceMappingsList</a>

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.delete"></a>

```go
func Delete() ManagedInstanceAwsDeleteList
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList">ManagedInstanceAwsDeleteList</a>

---

##### `IntegrationRoute53`<sup>Required</sup> <a name="IntegrationRoute53" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.integrationRoute53"></a>

```go
func IntegrationRoute53() ManagedInstanceAwsIntegrationRoute53OutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference">ManagedInstanceAwsIntegrationRoute53OutputReference</a>

---

##### `LoadBalancers`<sup>Required</sup> <a name="LoadBalancers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.loadBalancers"></a>

```go
func LoadBalancers() ManagedInstanceAwsLoadBalancersList
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList">ManagedInstanceAwsLoadBalancersList</a>

---

##### `ManagedInstanceAction`<sup>Required</sup> <a name="ManagedInstanceAction" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.managedInstanceAction"></a>

```go
func ManagedInstanceAction() ManagedInstanceAwsManagedInstanceActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference">ManagedInstanceAwsManagedInstanceActionOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.networkInterface"></a>

```go
func NetworkInterface() ManagedInstanceAwsNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList">ManagedInstanceAwsNetworkInterfaceList</a>

---

##### `ResourceTagSpecification`<sup>Required</sup> <a name="ResourceTagSpecification" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.resourceTagSpecification"></a>

```go
func ResourceTagSpecification() ManagedInstanceAwsResourceTagSpecificationList
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList">ManagedInstanceAwsResourceTagSpecificationList</a>

---

##### `RevertToSpot`<sup>Required</sup> <a name="RevertToSpot" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.revertToSpot"></a>

```go
func RevertToSpot() ManagedInstanceAwsRevertToSpotOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference">ManagedInstanceAwsRevertToSpotOutputReference</a>

---

##### `ScheduledTask`<sup>Required</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.scheduledTask"></a>

```go
func ScheduledTask() ManagedInstanceAwsScheduledTaskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList">ManagedInstanceAwsScheduledTaskList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.tags"></a>

```go
func Tags() ManagedInstanceAwsTagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList">ManagedInstanceAwsTagsList</a>

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.autoHealingInput"></a>

```go
func AutoHealingInput() interface{}
```

- *Type:* interface{}

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDeviceMappingsInput"></a>

```go
func BlockDeviceMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `BlockDevicesModeInput`<sup>Optional</sup> <a name="BlockDevicesModeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDevicesModeInput"></a>

```go
func BlockDevicesModeInput() *string
```

- *Type:* *string

---

##### `CpuCreditsInput`<sup>Optional</sup> <a name="CpuCreditsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.cpuCreditsInput"></a>

```go
func CpuCreditsInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.deleteInput"></a>

```go
func DeleteInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DrainingTimeoutInput`<sup>Optional</sup> <a name="DrainingTimeoutInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.drainingTimeoutInput"></a>

```go
func DrainingTimeoutInput() *f64
```

- *Type:* *f64

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.ebsOptimizedInput"></a>

```go
func EbsOptimizedInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticIpInput`<sup>Optional</sup> <a name="ElasticIpInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.elasticIpInput"></a>

```go
func ElasticIpInput() *string
```

- *Type:* *string

---

##### `EnableMonitoringInput`<sup>Optional</sup> <a name="EnableMonitoringInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.enableMonitoringInput"></a>

```go
func EnableMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `FallbackToOndemandInput`<sup>Optional</sup> <a name="FallbackToOndemandInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.fallbackToOndemandInput"></a>

```go
func FallbackToOndemandInput() interface{}
```

- *Type:* interface{}

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.gracePeriodInput"></a>

```go
func GracePeriodInput() *f64
```

- *Type:* *f64

---

##### `HealthCheckTypeInput`<sup>Optional</sup> <a name="HealthCheckTypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.healthCheckTypeInput"></a>

```go
func HealthCheckTypeInput() *string
```

- *Type:* *string

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.iamInstanceProfileInput"></a>

```go
func IamInstanceProfileInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `InstanceTypesInput`<sup>Optional</sup> <a name="InstanceTypesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.instanceTypesInput"></a>

```go
func InstanceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntegrationRoute53Input`<sup>Optional</sup> <a name="IntegrationRoute53Input" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.integrationRoute53Input"></a>

```go
func IntegrationRoute53Input() ManagedInstanceAwsIntegrationRoute53
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a>

---

##### `KeyPairInput`<sup>Optional</sup> <a name="KeyPairInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.keyPairInput"></a>

```go
func KeyPairInput() *string
```

- *Type:* *string

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.lifeCycleInput"></a>

```go
func LifeCycleInput() *string
```

- *Type:* *string

---

##### `LoadBalancersInput`<sup>Optional</sup> <a name="LoadBalancersInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.loadBalancersInput"></a>

```go
func LoadBalancersInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedInstanceActionInput`<sup>Optional</sup> <a name="ManagedInstanceActionInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.managedInstanceActionInput"></a>

```go
func ManagedInstanceActionInput() ManagedInstanceAwsManagedInstanceAction
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a>

---

##### `MinimumInstanceLifetimeInput`<sup>Optional</sup> <a name="MinimumInstanceLifetimeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.minimumInstanceLifetimeInput"></a>

```go
func MinimumInstanceLifetimeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `OptimizationWindowsInput`<sup>Optional</sup> <a name="OptimizationWindowsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.optimizationWindowsInput"></a>

```go
func OptimizationWindowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrientationInput`<sup>Optional</sup> <a name="OrientationInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.orientationInput"></a>

```go
func OrientationInput() *string
```

- *Type:* *string

---

##### `PersistBlockDevicesInput`<sup>Optional</sup> <a name="PersistBlockDevicesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistBlockDevicesInput"></a>

```go
func PersistBlockDevicesInput() interface{}
```

- *Type:* interface{}

---

##### `PersistPrivateIpInput`<sup>Optional</sup> <a name="PersistPrivateIpInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistPrivateIpInput"></a>

```go
func PersistPrivateIpInput() interface{}
```

- *Type:* interface{}

---

##### `PersistRootDeviceInput`<sup>Optional</sup> <a name="PersistRootDeviceInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistRootDeviceInput"></a>

```go
func PersistRootDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementTenancyInput`<sup>Optional</sup> <a name="PlacementTenancyInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.placementTenancyInput"></a>

```go
func PlacementTenancyInput() *string
```

- *Type:* *string

---

##### `PreferredTypeInput`<sup>Optional</sup> <a name="PreferredTypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.preferredTypeInput"></a>

```go
func PreferredTypeInput() *string
```

- *Type:* *string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceTagSpecificationInput`<sup>Optional</sup> <a name="ResourceTagSpecificationInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.resourceTagSpecificationInput"></a>

```go
func ResourceTagSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `RevertToSpotInput`<sup>Optional</sup> <a name="RevertToSpotInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.revertToSpotInput"></a>

```go
func RevertToSpotInput() ManagedInstanceAwsRevertToSpot
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a>

---

##### `ScheduledTaskInput`<sup>Optional</sup> <a name="ScheduledTaskInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.scheduledTaskInput"></a>

```go
func ScheduledTaskInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ShutdownScriptInput`<sup>Optional</sup> <a name="ShutdownScriptInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.shutdownScriptInput"></a>

```go
func ShutdownScriptInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UnhealthyDurationInput`<sup>Optional</sup> <a name="UnhealthyDurationInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.unhealthyDurationInput"></a>

```go
func UnhealthyDurationInput() *f64
```

- *Type:* *f64

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `UtilizeReservedInstancesInput`<sup>Optional</sup> <a name="UtilizeReservedInstancesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.utilizeReservedInstancesInput"></a>

```go
func UtilizeReservedInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.autoHealing"></a>

```go
func AutoHealing() interface{}
```

- *Type:* interface{}

---

##### `BlockDevicesMode`<sup>Required</sup> <a name="BlockDevicesMode" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDevicesMode"></a>

```go
func BlockDevicesMode() *string
```

- *Type:* *string

---

##### `CpuCredits`<sup>Required</sup> <a name="CpuCredits" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.cpuCredits"></a>

```go
func CpuCredits() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DrainingTimeout`<sup>Required</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.drainingTimeout"></a>

```go
func DrainingTimeout() *f64
```

- *Type:* *f64

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.ebsOptimized"></a>

```go
func EbsOptimized() interface{}
```

- *Type:* interface{}

---

##### `ElasticIp`<sup>Required</sup> <a name="ElasticIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.elasticIp"></a>

```go
func ElasticIp() *string
```

- *Type:* *string

---

##### `EnableMonitoring`<sup>Required</sup> <a name="EnableMonitoring" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.enableMonitoring"></a>

```go
func EnableMonitoring() interface{}
```

- *Type:* interface{}

---

##### `FallbackToOndemand`<sup>Required</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.fallbackToOndemand"></a>

```go
func FallbackToOndemand() interface{}
```

- *Type:* interface{}

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.gracePeriod"></a>

```go
func GracePeriod() *f64
```

- *Type:* *f64

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.healthCheckType"></a>

```go
func HealthCheckType() *string
```

- *Type:* *string

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.instanceTypes"></a>

```go
func InstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.keyPair"></a>

```go
func KeyPair() *string
```

- *Type:* *string

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.lifeCycle"></a>

```go
func LifeCycle() *string
```

- *Type:* *string

---

##### `MinimumInstanceLifetime`<sup>Required</sup> <a name="MinimumInstanceLifetime" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.minimumInstanceLifetime"></a>

```go
func MinimumInstanceLifetime() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OptimizationWindows`<sup>Required</sup> <a name="OptimizationWindows" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.optimizationWindows"></a>

```go
func OptimizationWindows() *[]*string
```

- *Type:* *[]*string

---

##### `Orientation`<sup>Required</sup> <a name="Orientation" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.orientation"></a>

```go
func Orientation() *string
```

- *Type:* *string

---

##### `PersistBlockDevices`<sup>Required</sup> <a name="PersistBlockDevices" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistBlockDevices"></a>

```go
func PersistBlockDevices() interface{}
```

- *Type:* interface{}

---

##### `PersistPrivateIp`<sup>Required</sup> <a name="PersistPrivateIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistPrivateIp"></a>

```go
func PersistPrivateIp() interface{}
```

- *Type:* interface{}

---

##### `PersistRootDevice`<sup>Required</sup> <a name="PersistRootDevice" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistRootDevice"></a>

```go
func PersistRootDevice() interface{}
```

- *Type:* interface{}

---

##### `PlacementTenancy`<sup>Required</sup> <a name="PlacementTenancy" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.placementTenancy"></a>

```go
func PlacementTenancy() *string
```

- *Type:* *string

---

##### `PreferredType`<sup>Required</sup> <a name="PreferredType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.preferredType"></a>

```go
func PreferredType() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `ShutdownScript`<sup>Required</sup> <a name="ShutdownScript" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.shutdownScript"></a>

```go
func ShutdownScript() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `UnhealthyDuration`<sup>Required</sup> <a name="UnhealthyDuration" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.unhealthyDuration"></a>

```go
func UnhealthyDuration() *f64
```

- *Type:* *f64

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `UtilizeReservedInstances`<sup>Required</sup> <a name="UtilizeReservedInstances" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.utilizeReservedInstances"></a>

```go
func UtilizeReservedInstances() interface{}
```

- *Type:* interface{}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedInstanceAwsBlockDeviceMappings <a name="ManagedInstanceAwsBlockDeviceMappings" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsBlockDeviceMappings {
	DeviceName: *string,
	Ebs: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#device_name ManagedInstanceAws#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a></code> | ebs block. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappings.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#device_name ManagedInstanceAws#device_name}.

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappings.property.ebs"></a>

```go
Ebs ManagedInstanceAwsBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#ebs ManagedInstanceAws#ebs}

---

### ManagedInstanceAwsBlockDeviceMappingsEbs <a name="ManagedInstanceAwsBlockDeviceMappingsEbs" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsBlockDeviceMappingsEbs {
	DeleteOnTermination: interface{},
	Iops: *f64,
	Throughput: *f64,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#delete_on_termination ManagedInstanceAws#delete_on_termination}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#iops ManagedInstanceAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#throughput ManagedInstanceAws#throughput}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#volume_size ManagedInstanceAws#volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#volume_type ManagedInstanceAws#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```go
DeleteOnTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#delete_on_termination ManagedInstanceAws#delete_on_termination}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#iops ManagedInstanceAws#iops}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#throughput ManagedInstanceAws#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#volume_size ManagedInstanceAws#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#volume_type ManagedInstanceAws#volume_type}.

---

### ManagedInstanceAwsConfig <a name="ManagedInstanceAwsConfig" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ImageId: *string,
	InstanceTypes: *[]*string,
	Name: *string,
	PersistBlockDevices: interface{},
	Product: *string,
	SubnetIds: *[]*string,
	VpcId: *string,
	AutoHealing: interface{},
	BlockDeviceMappings: interface{},
	BlockDevicesMode: *string,
	CpuCredits: *string,
	Delete: interface{},
	Description: *string,
	DrainingTimeout: *f64,
	EbsOptimized: interface{},
	ElasticIp: *string,
	EnableMonitoring: interface{},
	FallbackToOndemand: interface{},
	GracePeriod: *f64,
	HealthCheckType: *string,
	IamInstanceProfile: *string,
	Id: *string,
	IntegrationRoute53: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53,
	KeyPair: *string,
	LifeCycle: *string,
	LoadBalancers: interface{},
	ManagedInstanceAction: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction,
	MinimumInstanceLifetime: *f64,
	NetworkInterface: interface{},
	OptimizationWindows: *[]*string,
	Orientation: *string,
	PersistPrivateIp: interface{},
	PersistRootDevice: interface{},
	PlacementTenancy: *string,
	PreferredType: *string,
	PrivateIp: *string,
	Region: *string,
	ResourceTagSpecification: interface{},
	RevertToSpot: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot,
	ScheduledTask: interface{},
	SecurityGroupIds: *[]*string,
	ShutdownScript: *string,
	Tags: interface{},
	UnhealthyDuration: *f64,
	UserData: *string,
	UtilizeReservedInstances: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#image_id ManagedInstanceAws#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.instanceTypes">InstanceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#instance_types ManagedInstanceAws#instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.persistBlockDevices">PersistBlockDevices</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#persist_block_devices ManagedInstanceAws#persist_block_devices}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.product">Product</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#product ManagedInstanceAws#product}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#subnet_ids ManagedInstanceAws#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#vpc_id ManagedInstanceAws#vpc_id}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.autoHealing">AutoHealing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#auto_healing ManagedInstanceAws#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>interface{}</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.blockDevicesMode">BlockDevicesMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#block_devices_mode ManagedInstanceAws#block_devices_mode}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#cpu_credits ManagedInstanceAws#cpu_credits}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.delete">Delete</a></code> | <code>interface{}</code> | delete block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#description ManagedInstanceAws#description}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.drainingTimeout">DrainingTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#draining_timeout ManagedInstanceAws#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#ebs_optimized ManagedInstanceAws#ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.elasticIp">ElasticIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#elastic_ip ManagedInstanceAws#elastic_ip}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.enableMonitoring">EnableMonitoring</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#enable_monitoring ManagedInstanceAws#enable_monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#fallback_to_ondemand ManagedInstanceAws#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#grace_period ManagedInstanceAws#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.healthCheckType">HealthCheckType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#health_check_type ManagedInstanceAws#health_check_type}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#iam_instance_profile ManagedInstanceAws#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#id ManagedInstanceAws#id}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.integrationRoute53">IntegrationRoute53</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a></code> | integration_route53 block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.keyPair">KeyPair</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#key_pair ManagedInstanceAws#key_pair}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.lifeCycle">LifeCycle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#life_cycle ManagedInstanceAws#life_cycle}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.loadBalancers">LoadBalancers</a></code> | <code>interface{}</code> | load_balancers block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.managedInstanceAction">ManagedInstanceAction</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a></code> | managed_instance_action block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.minimumInstanceLifetime">MinimumInstanceLifetime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#minimum_instance_lifetime ManagedInstanceAws#minimum_instance_lifetime}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.optimizationWindows">OptimizationWindows</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#optimization_windows ManagedInstanceAws#optimization_windows}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.orientation">Orientation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#orientation ManagedInstanceAws#orientation}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.persistPrivateIp">PersistPrivateIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#persist_private_ip ManagedInstanceAws#persist_private_ip}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.persistRootDevice">PersistRootDevice</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#persist_root_device ManagedInstanceAws#persist_root_device}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.placementTenancy">PlacementTenancy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#placement_tenancy ManagedInstanceAws#placement_tenancy}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.preferredType">PreferredType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#preferred_type ManagedInstanceAws#preferred_type}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#private_ip ManagedInstanceAws#private_ip}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#region ManagedInstanceAws#region}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.resourceTagSpecification">ResourceTagSpecification</a></code> | <code>interface{}</code> | resource_tag_specification block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.revertToSpot">RevertToSpot</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a></code> | revert_to_spot block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.scheduledTask">ScheduledTask</a></code> | <code>interface{}</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#security_group_ids ManagedInstanceAws#security_group_ids}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.shutdownScript">ShutdownScript</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#shutdown_script ManagedInstanceAws#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.unhealthyDuration">UnhealthyDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#unhealthy_duration ManagedInstanceAws#unhealthy_duration}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#user_data ManagedInstanceAws#user_data}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.utilizeReservedInstances">UtilizeReservedInstances</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#utilize_reserved_instances ManagedInstanceAws#utilize_reserved_instances}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#image_id ManagedInstanceAws#image_id}.

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.instanceTypes"></a>

```go
InstanceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#instance_types ManagedInstanceAws#instance_types}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}.

---

##### `PersistBlockDevices`<sup>Required</sup> <a name="PersistBlockDevices" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.persistBlockDevices"></a>

```go
PersistBlockDevices interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#persist_block_devices ManagedInstanceAws#persist_block_devices}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.product"></a>

```go
Product *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#product ManagedInstanceAws#product}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#subnet_ids ManagedInstanceAws#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#vpc_id ManagedInstanceAws#vpc_id}.

---

##### `AutoHealing`<sup>Optional</sup> <a name="AutoHealing" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.autoHealing"></a>

```go
AutoHealing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#auto_healing ManagedInstanceAws#auto_healing}.

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.blockDeviceMappings"></a>

```go
BlockDeviceMappings interface{}
```

- *Type:* interface{}

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#block_device_mappings ManagedInstanceAws#block_device_mappings}

---

##### `BlockDevicesMode`<sup>Optional</sup> <a name="BlockDevicesMode" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.blockDevicesMode"></a>

```go
BlockDevicesMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#block_devices_mode ManagedInstanceAws#block_devices_mode}.

---

##### `CpuCredits`<sup>Optional</sup> <a name="CpuCredits" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.cpuCredits"></a>

```go
CpuCredits *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#cpu_credits ManagedInstanceAws#cpu_credits}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.delete"></a>

```go
Delete interface{}
```

- *Type:* interface{}

delete block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#delete ManagedInstanceAws#delete}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#description ManagedInstanceAws#description}.

---

##### `DrainingTimeout`<sup>Optional</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.drainingTimeout"></a>

```go
DrainingTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#draining_timeout ManagedInstanceAws#draining_timeout}.

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.ebsOptimized"></a>

```go
EbsOptimized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#ebs_optimized ManagedInstanceAws#ebs_optimized}.

---

##### `ElasticIp`<sup>Optional</sup> <a name="ElasticIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.elasticIp"></a>

```go
ElasticIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#elastic_ip ManagedInstanceAws#elastic_ip}.

---

##### `EnableMonitoring`<sup>Optional</sup> <a name="EnableMonitoring" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.enableMonitoring"></a>

```go
EnableMonitoring interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#enable_monitoring ManagedInstanceAws#enable_monitoring}.

---

##### `FallbackToOndemand`<sup>Optional</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.fallbackToOndemand"></a>

```go
FallbackToOndemand interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#fallback_to_ondemand ManagedInstanceAws#fallback_to_ondemand}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.gracePeriod"></a>

```go
GracePeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#grace_period ManagedInstanceAws#grace_period}.

---

##### `HealthCheckType`<sup>Optional</sup> <a name="HealthCheckType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.healthCheckType"></a>

```go
HealthCheckType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#health_check_type ManagedInstanceAws#health_check_type}.

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.iamInstanceProfile"></a>

```go
IamInstanceProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#iam_instance_profile ManagedInstanceAws#iam_instance_profile}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#id ManagedInstanceAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRoute53`<sup>Optional</sup> <a name="IntegrationRoute53" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.integrationRoute53"></a>

```go
IntegrationRoute53 ManagedInstanceAwsIntegrationRoute53
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a>

integration_route53 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#integration_route53 ManagedInstanceAws#integration_route53}

---

##### `KeyPair`<sup>Optional</sup> <a name="KeyPair" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.keyPair"></a>

```go
KeyPair *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#key_pair ManagedInstanceAws#key_pair}.

---

##### `LifeCycle`<sup>Optional</sup> <a name="LifeCycle" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.lifeCycle"></a>

```go
LifeCycle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#life_cycle ManagedInstanceAws#life_cycle}.

---

##### `LoadBalancers`<sup>Optional</sup> <a name="LoadBalancers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.loadBalancers"></a>

```go
LoadBalancers interface{}
```

- *Type:* interface{}

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#load_balancers ManagedInstanceAws#load_balancers}

---

##### `ManagedInstanceAction`<sup>Optional</sup> <a name="ManagedInstanceAction" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.managedInstanceAction"></a>

```go
ManagedInstanceAction ManagedInstanceAwsManagedInstanceAction
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a>

managed_instance_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#managed_instance_action ManagedInstanceAws#managed_instance_action}

---

##### `MinimumInstanceLifetime`<sup>Optional</sup> <a name="MinimumInstanceLifetime" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.minimumInstanceLifetime"></a>

```go
MinimumInstanceLifetime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#minimum_instance_lifetime ManagedInstanceAws#minimum_instance_lifetime}.

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#network_interface ManagedInstanceAws#network_interface}

---

##### `OptimizationWindows`<sup>Optional</sup> <a name="OptimizationWindows" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.optimizationWindows"></a>

```go
OptimizationWindows *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#optimization_windows ManagedInstanceAws#optimization_windows}.

---

##### `Orientation`<sup>Optional</sup> <a name="Orientation" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.orientation"></a>

```go
Orientation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#orientation ManagedInstanceAws#orientation}.

---

##### `PersistPrivateIp`<sup>Optional</sup> <a name="PersistPrivateIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.persistPrivateIp"></a>

```go
PersistPrivateIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#persist_private_ip ManagedInstanceAws#persist_private_ip}.

---

##### `PersistRootDevice`<sup>Optional</sup> <a name="PersistRootDevice" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.persistRootDevice"></a>

```go
PersistRootDevice interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#persist_root_device ManagedInstanceAws#persist_root_device}.

---

##### `PlacementTenancy`<sup>Optional</sup> <a name="PlacementTenancy" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.placementTenancy"></a>

```go
PlacementTenancy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#placement_tenancy ManagedInstanceAws#placement_tenancy}.

---

##### `PreferredType`<sup>Optional</sup> <a name="PreferredType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.preferredType"></a>

```go
PreferredType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#preferred_type ManagedInstanceAws#preferred_type}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#private_ip ManagedInstanceAws#private_ip}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#region ManagedInstanceAws#region}.

---

##### `ResourceTagSpecification`<sup>Optional</sup> <a name="ResourceTagSpecification" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.resourceTagSpecification"></a>

```go
ResourceTagSpecification interface{}
```

- *Type:* interface{}

resource_tag_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#resource_tag_specification ManagedInstanceAws#resource_tag_specification}

---

##### `RevertToSpot`<sup>Optional</sup> <a name="RevertToSpot" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.revertToSpot"></a>

```go
RevertToSpot ManagedInstanceAwsRevertToSpot
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a>

revert_to_spot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#revert_to_spot ManagedInstanceAws#revert_to_spot}

---

##### `ScheduledTask`<sup>Optional</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.scheduledTask"></a>

```go
ScheduledTask interface{}
```

- *Type:* interface{}

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#scheduled_task ManagedInstanceAws#scheduled_task}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#security_group_ids ManagedInstanceAws#security_group_ids}.

---

##### `ShutdownScript`<sup>Optional</sup> <a name="ShutdownScript" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.shutdownScript"></a>

```go
ShutdownScript *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#shutdown_script ManagedInstanceAws#shutdown_script}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#tags ManagedInstanceAws#tags}

---

##### `UnhealthyDuration`<sup>Optional</sup> <a name="UnhealthyDuration" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.unhealthyDuration"></a>

```go
UnhealthyDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#unhealthy_duration ManagedInstanceAws#unhealthy_duration}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#user_data ManagedInstanceAws#user_data}.

---

##### `UtilizeReservedInstances`<sup>Optional</sup> <a name="UtilizeReservedInstances" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.utilizeReservedInstances"></a>

```go
UtilizeReservedInstances interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#utilize_reserved_instances ManagedInstanceAws#utilize_reserved_instances}.

---

### ManagedInstanceAwsDelete <a name="ManagedInstanceAwsDelete" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsDelete {
	AmiBackupShouldDeleteImages: interface{},
	DeallocationConfigShouldDeleteImages: interface{},
	ShouldDeleteNetworkInterfaces: interface{},
	ShouldDeleteSnapshots: interface{},
	ShouldDeleteVolumes: interface{},
	ShouldTerminateInstance: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.amiBackupShouldDeleteImages">AmiBackupShouldDeleteImages</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#ami_backup_should_delete_images ManagedInstanceAws#ami_backup_should_delete_images}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.deallocationConfigShouldDeleteImages">DeallocationConfigShouldDeleteImages</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#deallocation_config_should_delete_images ManagedInstanceAws#deallocation_config_should_delete_images}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldDeleteNetworkInterfaces">ShouldDeleteNetworkInterfaces</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_delete_network_interfaces ManagedInstanceAws#should_delete_network_interfaces}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldDeleteSnapshots">ShouldDeleteSnapshots</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_delete_snapshots ManagedInstanceAws#should_delete_snapshots}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldDeleteVolumes">ShouldDeleteVolumes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_delete_volumes ManagedInstanceAws#should_delete_volumes}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldTerminateInstance">ShouldTerminateInstance</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_terminate_instance ManagedInstanceAws#should_terminate_instance}. |

---

##### `AmiBackupShouldDeleteImages`<sup>Optional</sup> <a name="AmiBackupShouldDeleteImages" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.amiBackupShouldDeleteImages"></a>

```go
AmiBackupShouldDeleteImages interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#ami_backup_should_delete_images ManagedInstanceAws#ami_backup_should_delete_images}.

---

##### `DeallocationConfigShouldDeleteImages`<sup>Optional</sup> <a name="DeallocationConfigShouldDeleteImages" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.deallocationConfigShouldDeleteImages"></a>

```go
DeallocationConfigShouldDeleteImages interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#deallocation_config_should_delete_images ManagedInstanceAws#deallocation_config_should_delete_images}.

---

##### `ShouldDeleteNetworkInterfaces`<sup>Optional</sup> <a name="ShouldDeleteNetworkInterfaces" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldDeleteNetworkInterfaces"></a>

```go
ShouldDeleteNetworkInterfaces interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_delete_network_interfaces ManagedInstanceAws#should_delete_network_interfaces}.

---

##### `ShouldDeleteSnapshots`<sup>Optional</sup> <a name="ShouldDeleteSnapshots" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldDeleteSnapshots"></a>

```go
ShouldDeleteSnapshots interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_delete_snapshots ManagedInstanceAws#should_delete_snapshots}.

---

##### `ShouldDeleteVolumes`<sup>Optional</sup> <a name="ShouldDeleteVolumes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldDeleteVolumes"></a>

```go
ShouldDeleteVolumes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_delete_volumes ManagedInstanceAws#should_delete_volumes}.

---

##### `ShouldTerminateInstance`<sup>Optional</sup> <a name="ShouldTerminateInstance" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldTerminateInstance"></a>

```go
ShouldTerminateInstance interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_terminate_instance ManagedInstanceAws#should_terminate_instance}.

---

### ManagedInstanceAwsIntegrationRoute53 <a name="ManagedInstanceAwsIntegrationRoute53" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsIntegrationRoute53 {
	Domains: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53.property.domains">Domains</a></code> | <code>interface{}</code> | domains block. |

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53.property.domains"></a>

```go
Domains interface{}
```

- *Type:* interface{}

domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#domains ManagedInstanceAws#domains}

---

### ManagedInstanceAwsIntegrationRoute53Domains <a name="ManagedInstanceAwsIntegrationRoute53Domains" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsIntegrationRoute53Domains {
	HostedZoneId: *string,
	RecordSets: interface{},
	RecordSetType: *string,
	SpotinstAcctId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#hosted_zone_id ManagedInstanceAws#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.recordSets">RecordSets</a></code> | <code>interface{}</code> | record_sets block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.recordSetType">RecordSetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#record_set_type ManagedInstanceAws#record_set_type}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.spotinstAcctId">SpotinstAcctId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#spotinst_acct_id ManagedInstanceAws#spotinst_acct_id}. |

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.hostedZoneId"></a>

```go
HostedZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#hosted_zone_id ManagedInstanceAws#hosted_zone_id}.

---

##### `RecordSets`<sup>Required</sup> <a name="RecordSets" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.recordSets"></a>

```go
RecordSets interface{}
```

- *Type:* interface{}

record_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#record_sets ManagedInstanceAws#record_sets}

---

##### `RecordSetType`<sup>Optional</sup> <a name="RecordSetType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.recordSetType"></a>

```go
RecordSetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#record_set_type ManagedInstanceAws#record_set_type}.

---

##### `SpotinstAcctId`<sup>Optional</sup> <a name="SpotinstAcctId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.spotinstAcctId"></a>

```go
SpotinstAcctId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#spotinst_acct_id ManagedInstanceAws#spotinst_acct_id}.

---

### ManagedInstanceAwsIntegrationRoute53DomainsRecordSets <a name="ManagedInstanceAwsIntegrationRoute53DomainsRecordSets" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets {
	Name: *string,
	UsePublicDns: interface{},
	UsePublicIp: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.property.usePublicDns">UsePublicDns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#use_public_dns ManagedInstanceAws#use_public_dns}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.property.usePublicIp">UsePublicIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#use_public_ip ManagedInstanceAws#use_public_ip}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}.

---

##### `UsePublicDns`<sup>Optional</sup> <a name="UsePublicDns" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.property.usePublicDns"></a>

```go
UsePublicDns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#use_public_dns ManagedInstanceAws#use_public_dns}.

---

##### `UsePublicIp`<sup>Optional</sup> <a name="UsePublicIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.property.usePublicIp"></a>

```go
UsePublicIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#use_public_ip ManagedInstanceAws#use_public_ip}.

---

### ManagedInstanceAwsLoadBalancers <a name="ManagedInstanceAwsLoadBalancers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsLoadBalancers {
	Type: *string,
	Arn: *string,
	AutoWeight: interface{},
	AzAwareness: interface{},
	BalancerId: *string,
	Name: *string,
	TargetSetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#type ManagedInstanceAws#type}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#arn ManagedInstanceAws#arn}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.autoWeight">AutoWeight</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#auto_weight ManagedInstanceAws#auto_weight}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.azAwareness">AzAwareness</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#az_awareness ManagedInstanceAws#az_awareness}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.balancerId">BalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#balancer_id ManagedInstanceAws#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.targetSetId">TargetSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#target_set_id ManagedInstanceAws#target_set_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#type ManagedInstanceAws#type}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#arn ManagedInstanceAws#arn}.

---

##### `AutoWeight`<sup>Optional</sup> <a name="AutoWeight" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.autoWeight"></a>

```go
AutoWeight interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#auto_weight ManagedInstanceAws#auto_weight}.

---

##### `AzAwareness`<sup>Optional</sup> <a name="AzAwareness" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.azAwareness"></a>

```go
AzAwareness interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#az_awareness ManagedInstanceAws#az_awareness}.

---

##### `BalancerId`<sup>Optional</sup> <a name="BalancerId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.balancerId"></a>

```go
BalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#balancer_id ManagedInstanceAws#balancer_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}.

---

##### `TargetSetId`<sup>Optional</sup> <a name="TargetSetId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.targetSetId"></a>

```go
TargetSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#target_set_id ManagedInstanceAws#target_set_id}.

---

### ManagedInstanceAwsManagedInstanceAction <a name="ManagedInstanceAwsManagedInstanceAction" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsManagedInstanceAction {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#type ManagedInstanceAws#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#type ManagedInstanceAws#type}.

---

### ManagedInstanceAwsNetworkInterface <a name="ManagedInstanceAwsNetworkInterface" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsNetworkInterface {
	DeviceIndex: *string,
	AssociateIpv6Address: interface{},
	AssociatePublicIpAddress: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.property.deviceIndex">DeviceIndex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#device_index ManagedInstanceAws#device_index}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.property.associateIpv6Address">AssociateIpv6Address</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#associate_ipv6_address ManagedInstanceAws#associate_ipv6_address}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#associate_public_ip_address ManagedInstanceAws#associate_public_ip_address}. |

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.property.deviceIndex"></a>

```go
DeviceIndex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#device_index ManagedInstanceAws#device_index}.

---

##### `AssociateIpv6Address`<sup>Optional</sup> <a name="AssociateIpv6Address" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.property.associateIpv6Address"></a>

```go
AssociateIpv6Address interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#associate_ipv6_address ManagedInstanceAws#associate_ipv6_address}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.property.associatePublicIpAddress"></a>

```go
AssociatePublicIpAddress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#associate_public_ip_address ManagedInstanceAws#associate_public_ip_address}.

---

### ManagedInstanceAwsResourceTagSpecification <a name="ManagedInstanceAwsResourceTagSpecification" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsResourceTagSpecification {
	ShouldTagAmis: interface{},
	ShouldTagEnis: interface{},
	ShouldTagSnapshots: interface{},
	ShouldTagVolumes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagAmis">ShouldTagAmis</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_tag_amis ManagedInstanceAws#should_tag_amis}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagEnis">ShouldTagEnis</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_tag_enis ManagedInstanceAws#should_tag_enis}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagSnapshots">ShouldTagSnapshots</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_tag_snapshots ManagedInstanceAws#should_tag_snapshots}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagVolumes">ShouldTagVolumes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_tag_volumes ManagedInstanceAws#should_tag_volumes}. |

---

##### `ShouldTagAmis`<sup>Optional</sup> <a name="ShouldTagAmis" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagAmis"></a>

```go
ShouldTagAmis interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_tag_amis ManagedInstanceAws#should_tag_amis}.

---

##### `ShouldTagEnis`<sup>Optional</sup> <a name="ShouldTagEnis" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagEnis"></a>

```go
ShouldTagEnis interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_tag_enis ManagedInstanceAws#should_tag_enis}.

---

##### `ShouldTagSnapshots`<sup>Optional</sup> <a name="ShouldTagSnapshots" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagSnapshots"></a>

```go
ShouldTagSnapshots interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_tag_snapshots ManagedInstanceAws#should_tag_snapshots}.

---

##### `ShouldTagVolumes`<sup>Optional</sup> <a name="ShouldTagVolumes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagVolumes"></a>

```go
ShouldTagVolumes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#should_tag_volumes ManagedInstanceAws#should_tag_volumes}.

---

### ManagedInstanceAwsRevertToSpot <a name="ManagedInstanceAwsRevertToSpot" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsRevertToSpot {
	PerformAt: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot.property.performAt">PerformAt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#perform_at ManagedInstanceAws#perform_at}. |

---

##### `PerformAt`<sup>Required</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot.property.performAt"></a>

```go
PerformAt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#perform_at ManagedInstanceAws#perform_at}.

---

### ManagedInstanceAwsScheduledTask <a name="ManagedInstanceAwsScheduledTask" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsScheduledTask {
	TaskType: *string,
	CronExpression: *string,
	Frequency: *string,
	IsEnabled: interface{},
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.taskType">TaskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#task_type ManagedInstanceAws#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.cronExpression">CronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#cron_expression ManagedInstanceAws#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.frequency">Frequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#frequency ManagedInstanceAws#frequency}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#is_enabled ManagedInstanceAws#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#start_time ManagedInstanceAws#start_time}. |

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.taskType"></a>

```go
TaskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#task_type ManagedInstanceAws#task_type}.

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.cronExpression"></a>

```go
CronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#cron_expression ManagedInstanceAws#cron_expression}.

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#frequency ManagedInstanceAws#frequency}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#is_enabled ManagedInstanceAws#is_enabled}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#start_time ManagedInstanceAws#start_time}.

---

### ManagedInstanceAwsTags <a name="ManagedInstanceAwsTags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

&managedinstanceaws.ManagedInstanceAwsTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#key ManagedInstanceAws#key}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#value ManagedInstanceAws#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#key ManagedInstanceAws#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.158.0/docs/resources/managed_instance_aws#value ManagedInstanceAws#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference <a name="ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsBlockDeviceMappingsEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedInstanceAwsBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a>

---


### ManagedInstanceAwsBlockDeviceMappingsList <a name="ManagedInstanceAwsBlockDeviceMappingsList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsBlockDeviceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedInstanceAwsBlockDeviceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.get"></a>

```go
func Get(index *f64) ManagedInstanceAwsBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsBlockDeviceMappingsOutputReference <a name="ManagedInstanceAwsBlockDeviceMappingsOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsBlockDeviceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedInstanceAwsBlockDeviceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.putEbs"></a>

```go
func PutEbs(value ManagedInstanceAwsBlockDeviceMappingsEbs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a>

---

##### `ResetEbs` <a name="ResetEbs" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.resetEbs"></a>

```go
func ResetEbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference">ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.ebs"></a>

```go
func Ebs() ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference">ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```go
func EbsInput() ManagedInstanceAwsBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a>

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsDeleteList <a name="ManagedInstanceAwsDeleteList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsDeleteList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedInstanceAwsDeleteList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.get"></a>

```go
func Get(index *f64) ManagedInstanceAwsDeleteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsDeleteOutputReference <a name="ManagedInstanceAwsDeleteOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsDeleteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedInstanceAwsDeleteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetAmiBackupShouldDeleteImages">ResetAmiBackupShouldDeleteImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetDeallocationConfigShouldDeleteImages">ResetDeallocationConfigShouldDeleteImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldDeleteNetworkInterfaces">ResetShouldDeleteNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldDeleteSnapshots">ResetShouldDeleteSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldDeleteVolumes">ResetShouldDeleteVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldTerminateInstance">ResetShouldTerminateInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmiBackupShouldDeleteImages` <a name="ResetAmiBackupShouldDeleteImages" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetAmiBackupShouldDeleteImages"></a>

```go
func ResetAmiBackupShouldDeleteImages()
```

##### `ResetDeallocationConfigShouldDeleteImages` <a name="ResetDeallocationConfigShouldDeleteImages" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetDeallocationConfigShouldDeleteImages"></a>

```go
func ResetDeallocationConfigShouldDeleteImages()
```

##### `ResetShouldDeleteNetworkInterfaces` <a name="ResetShouldDeleteNetworkInterfaces" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldDeleteNetworkInterfaces"></a>

```go
func ResetShouldDeleteNetworkInterfaces()
```

##### `ResetShouldDeleteSnapshots` <a name="ResetShouldDeleteSnapshots" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldDeleteSnapshots"></a>

```go
func ResetShouldDeleteSnapshots()
```

##### `ResetShouldDeleteVolumes` <a name="ResetShouldDeleteVolumes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldDeleteVolumes"></a>

```go
func ResetShouldDeleteVolumes()
```

##### `ResetShouldTerminateInstance` <a name="ResetShouldTerminateInstance" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldTerminateInstance"></a>

```go
func ResetShouldTerminateInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.amiBackupShouldDeleteImagesInput">AmiBackupShouldDeleteImagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.deallocationConfigShouldDeleteImagesInput">DeallocationConfigShouldDeleteImagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteNetworkInterfacesInput">ShouldDeleteNetworkInterfacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteSnapshotsInput">ShouldDeleteSnapshotsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteVolumesInput">ShouldDeleteVolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldTerminateInstanceInput">ShouldTerminateInstanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.amiBackupShouldDeleteImages">AmiBackupShouldDeleteImages</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.deallocationConfigShouldDeleteImages">DeallocationConfigShouldDeleteImages</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteNetworkInterfaces">ShouldDeleteNetworkInterfaces</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteSnapshots">ShouldDeleteSnapshots</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteVolumes">ShouldDeleteVolumes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldTerminateInstance">ShouldTerminateInstance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmiBackupShouldDeleteImagesInput`<sup>Optional</sup> <a name="AmiBackupShouldDeleteImagesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.amiBackupShouldDeleteImagesInput"></a>

```go
func AmiBackupShouldDeleteImagesInput() interface{}
```

- *Type:* interface{}

---

##### `DeallocationConfigShouldDeleteImagesInput`<sup>Optional</sup> <a name="DeallocationConfigShouldDeleteImagesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.deallocationConfigShouldDeleteImagesInput"></a>

```go
func DeallocationConfigShouldDeleteImagesInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldDeleteNetworkInterfacesInput`<sup>Optional</sup> <a name="ShouldDeleteNetworkInterfacesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteNetworkInterfacesInput"></a>

```go
func ShouldDeleteNetworkInterfacesInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldDeleteSnapshotsInput`<sup>Optional</sup> <a name="ShouldDeleteSnapshotsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteSnapshotsInput"></a>

```go
func ShouldDeleteSnapshotsInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldDeleteVolumesInput`<sup>Optional</sup> <a name="ShouldDeleteVolumesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteVolumesInput"></a>

```go
func ShouldDeleteVolumesInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldTerminateInstanceInput`<sup>Optional</sup> <a name="ShouldTerminateInstanceInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldTerminateInstanceInput"></a>

```go
func ShouldTerminateInstanceInput() interface{}
```

- *Type:* interface{}

---

##### `AmiBackupShouldDeleteImages`<sup>Required</sup> <a name="AmiBackupShouldDeleteImages" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.amiBackupShouldDeleteImages"></a>

```go
func AmiBackupShouldDeleteImages() interface{}
```

- *Type:* interface{}

---

##### `DeallocationConfigShouldDeleteImages`<sup>Required</sup> <a name="DeallocationConfigShouldDeleteImages" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.deallocationConfigShouldDeleteImages"></a>

```go
func DeallocationConfigShouldDeleteImages() interface{}
```

- *Type:* interface{}

---

##### `ShouldDeleteNetworkInterfaces`<sup>Required</sup> <a name="ShouldDeleteNetworkInterfaces" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteNetworkInterfaces"></a>

```go
func ShouldDeleteNetworkInterfaces() interface{}
```

- *Type:* interface{}

---

##### `ShouldDeleteSnapshots`<sup>Required</sup> <a name="ShouldDeleteSnapshots" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteSnapshots"></a>

```go
func ShouldDeleteSnapshots() interface{}
```

- *Type:* interface{}

---

##### `ShouldDeleteVolumes`<sup>Required</sup> <a name="ShouldDeleteVolumes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteVolumes"></a>

```go
func ShouldDeleteVolumes() interface{}
```

- *Type:* interface{}

---

##### `ShouldTerminateInstance`<sup>Required</sup> <a name="ShouldTerminateInstance" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldTerminateInstance"></a>

```go
func ShouldTerminateInstance() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsIntegrationRoute53DomainsList <a name="ManagedInstanceAwsIntegrationRoute53DomainsList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsIntegrationRoute53DomainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedInstanceAwsIntegrationRoute53DomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.get"></a>

```go
func Get(index *f64) ManagedInstanceAwsIntegrationRoute53DomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsIntegrationRoute53DomainsOutputReference <a name="ManagedInstanceAwsIntegrationRoute53DomainsOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsIntegrationRoute53DomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedInstanceAwsIntegrationRoute53DomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.putRecordSets">PutRecordSets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resetRecordSetType">ResetRecordSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resetSpotinstAcctId">ResetSpotinstAcctId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecordSets` <a name="PutRecordSets" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.putRecordSets"></a>

```go
func PutRecordSets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.putRecordSets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRecordSetType` <a name="ResetRecordSetType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resetRecordSetType"></a>

```go
func ResetRecordSetType()
```

##### `ResetSpotinstAcctId` <a name="ResetSpotinstAcctId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resetSpotinstAcctId"></a>

```go
func ResetSpotinstAcctId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSets">RecordSets</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList">ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSetsInput">RecordSetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSetTypeInput">RecordSetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.spotinstAcctIdInput">SpotinstAcctIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSetType">RecordSetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.spotinstAcctId">SpotinstAcctId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecordSets`<sup>Required</sup> <a name="RecordSets" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSets"></a>

```go
func RecordSets() ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList">ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList</a>

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.hostedZoneIdInput"></a>

```go
func HostedZoneIdInput() *string
```

- *Type:* *string

---

##### `RecordSetsInput`<sup>Optional</sup> <a name="RecordSetsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSetsInput"></a>

```go
func RecordSetsInput() interface{}
```

- *Type:* interface{}

---

##### `RecordSetTypeInput`<sup>Optional</sup> <a name="RecordSetTypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSetTypeInput"></a>

```go
func RecordSetTypeInput() *string
```

- *Type:* *string

---

##### `SpotinstAcctIdInput`<sup>Optional</sup> <a name="SpotinstAcctIdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.spotinstAcctIdInput"></a>

```go
func SpotinstAcctIdInput() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `RecordSetType`<sup>Required</sup> <a name="RecordSetType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSetType"></a>

```go
func RecordSetType() *string
```

- *Type:* *string

---

##### `SpotinstAcctId`<sup>Required</sup> <a name="SpotinstAcctId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.spotinstAcctId"></a>

```go
func SpotinstAcctId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList <a name="ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.get"></a>

```go
func Get(index *f64) ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference <a name="ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resetUsePublicDns">ResetUsePublicDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resetUsePublicIp">ResetUsePublicIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUsePublicDns` <a name="ResetUsePublicDns" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resetUsePublicDns"></a>

```go
func ResetUsePublicDns()
```

##### `ResetUsePublicIp` <a name="ResetUsePublicIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resetUsePublicIp"></a>

```go
func ResetUsePublicIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicDnsInput">UsePublicDnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicIpInput">UsePublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicDns">UsePublicDns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicIp">UsePublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UsePublicDnsInput`<sup>Optional</sup> <a name="UsePublicDnsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicDnsInput"></a>

```go
func UsePublicDnsInput() interface{}
```

- *Type:* interface{}

---

##### `UsePublicIpInput`<sup>Optional</sup> <a name="UsePublicIpInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicIpInput"></a>

```go
func UsePublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UsePublicDns`<sup>Required</sup> <a name="UsePublicDns" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicDns"></a>

```go
func UsePublicDns() interface{}
```

- *Type:* interface{}

---

##### `UsePublicIp`<sup>Required</sup> <a name="UsePublicIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicIp"></a>

```go
func UsePublicIp() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsIntegrationRoute53OutputReference <a name="ManagedInstanceAwsIntegrationRoute53OutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsIntegrationRoute53OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedInstanceAwsIntegrationRoute53OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.putDomains">PutDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDomains` <a name="PutDomains" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.putDomains"></a>

```go
func PutDomains(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.putDomains.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.domains">Domains</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList">ManagedInstanceAwsIntegrationRoute53DomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.domainsInput">DomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.domains"></a>

```go
func Domains() ManagedInstanceAwsIntegrationRoute53DomainsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList">ManagedInstanceAwsIntegrationRoute53DomainsList</a>

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.domainsInput"></a>

```go
func DomainsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedInstanceAwsIntegrationRoute53
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a>

---


### ManagedInstanceAwsLoadBalancersList <a name="ManagedInstanceAwsLoadBalancersList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsLoadBalancersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedInstanceAwsLoadBalancersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.get"></a>

```go
func Get(index *f64) ManagedInstanceAwsLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsLoadBalancersOutputReference <a name="ManagedInstanceAwsLoadBalancersOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsLoadBalancersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedInstanceAwsLoadBalancersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetAutoWeight">ResetAutoWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetAzAwareness">ResetAzAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetBalancerId">ResetBalancerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetTargetSetId">ResetTargetSetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetArn"></a>

```go
func ResetArn()
```

##### `ResetAutoWeight` <a name="ResetAutoWeight" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetAutoWeight"></a>

```go
func ResetAutoWeight()
```

##### `ResetAzAwareness` <a name="ResetAzAwareness" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetAzAwareness"></a>

```go
func ResetAzAwareness()
```

##### `ResetBalancerId` <a name="ResetBalancerId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetBalancerId"></a>

```go
func ResetBalancerId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTargetSetId` <a name="ResetTargetSetId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetTargetSetId"></a>

```go
func ResetTargetSetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.autoWeightInput">AutoWeightInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.azAwarenessInput">AzAwarenessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.balancerIdInput">BalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.targetSetIdInput">TargetSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.autoWeight">AutoWeight</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.azAwareness">AzAwareness</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.balancerId">BalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.targetSetId">TargetSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `AutoWeightInput`<sup>Optional</sup> <a name="AutoWeightInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.autoWeightInput"></a>

```go
func AutoWeightInput() interface{}
```

- *Type:* interface{}

---

##### `AzAwarenessInput`<sup>Optional</sup> <a name="AzAwarenessInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.azAwarenessInput"></a>

```go
func AzAwarenessInput() interface{}
```

- *Type:* interface{}

---

##### `BalancerIdInput`<sup>Optional</sup> <a name="BalancerIdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.balancerIdInput"></a>

```go
func BalancerIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetSetIdInput`<sup>Optional</sup> <a name="TargetSetIdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.targetSetIdInput"></a>

```go
func TargetSetIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoWeight`<sup>Required</sup> <a name="AutoWeight" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.autoWeight"></a>

```go
func AutoWeight() interface{}
```

- *Type:* interface{}

---

##### `AzAwareness`<sup>Required</sup> <a name="AzAwareness" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.azAwareness"></a>

```go
func AzAwareness() interface{}
```

- *Type:* interface{}

---

##### `BalancerId`<sup>Required</sup> <a name="BalancerId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.balancerId"></a>

```go
func BalancerId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TargetSetId`<sup>Required</sup> <a name="TargetSetId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.targetSetId"></a>

```go
func TargetSetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsManagedInstanceActionOutputReference <a name="ManagedInstanceAwsManagedInstanceActionOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsManagedInstanceActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedInstanceAwsManagedInstanceActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedInstanceAwsManagedInstanceAction
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a>

---


### ManagedInstanceAwsNetworkInterfaceList <a name="ManagedInstanceAwsNetworkInterfaceList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedInstanceAwsNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.get"></a>

```go
func Get(index *f64) ManagedInstanceAwsNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsNetworkInterfaceOutputReference <a name="ManagedInstanceAwsNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedInstanceAwsNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resetAssociateIpv6Address">ResetAssociateIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssociateIpv6Address` <a name="ResetAssociateIpv6Address" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resetAssociateIpv6Address"></a>

```go
func ResetAssociateIpv6Address()
```

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resetAssociatePublicIpAddress"></a>

```go
func ResetAssociatePublicIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associateIpv6AddressInput">AssociateIpv6AddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associateIpv6Address">AssociateIpv6Address</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssociateIpv6AddressInput`<sup>Optional</sup> <a name="AssociateIpv6AddressInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associateIpv6AddressInput"></a>

```go
func AssociateIpv6AddressInput() interface{}
```

- *Type:* interface{}

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associatePublicIpAddressInput"></a>

```go
func AssociatePublicIpAddressInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.deviceIndexInput"></a>

```go
func DeviceIndexInput() *string
```

- *Type:* *string

---

##### `AssociateIpv6Address`<sup>Required</sup> <a name="AssociateIpv6Address" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associateIpv6Address"></a>

```go
func AssociateIpv6Address() interface{}
```

- *Type:* interface{}

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associatePublicIpAddress"></a>

```go
func AssociatePublicIpAddress() interface{}
```

- *Type:* interface{}

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.deviceIndex"></a>

```go
func DeviceIndex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsResourceTagSpecificationList <a name="ManagedInstanceAwsResourceTagSpecificationList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsResourceTagSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedInstanceAwsResourceTagSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.get"></a>

```go
func Get(index *f64) ManagedInstanceAwsResourceTagSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsResourceTagSpecificationOutputReference <a name="ManagedInstanceAwsResourceTagSpecificationOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsResourceTagSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedInstanceAwsResourceTagSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagAmis">ResetShouldTagAmis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagEnis">ResetShouldTagEnis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagSnapshots">ResetShouldTagSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagVolumes">ResetShouldTagVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetShouldTagAmis` <a name="ResetShouldTagAmis" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagAmis"></a>

```go
func ResetShouldTagAmis()
```

##### `ResetShouldTagEnis` <a name="ResetShouldTagEnis" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagEnis"></a>

```go
func ResetShouldTagEnis()
```

##### `ResetShouldTagSnapshots` <a name="ResetShouldTagSnapshots" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagSnapshots"></a>

```go
func ResetShouldTagSnapshots()
```

##### `ResetShouldTagVolumes` <a name="ResetShouldTagVolumes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagVolumes"></a>

```go
func ResetShouldTagVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagAmisInput">ShouldTagAmisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagEnisInput">ShouldTagEnisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagSnapshotsInput">ShouldTagSnapshotsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagVolumesInput">ShouldTagVolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagAmis">ShouldTagAmis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagEnis">ShouldTagEnis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagSnapshots">ShouldTagSnapshots</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagVolumes">ShouldTagVolumes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShouldTagAmisInput`<sup>Optional</sup> <a name="ShouldTagAmisInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagAmisInput"></a>

```go
func ShouldTagAmisInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldTagEnisInput`<sup>Optional</sup> <a name="ShouldTagEnisInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagEnisInput"></a>

```go
func ShouldTagEnisInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldTagSnapshotsInput`<sup>Optional</sup> <a name="ShouldTagSnapshotsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagSnapshotsInput"></a>

```go
func ShouldTagSnapshotsInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldTagVolumesInput`<sup>Optional</sup> <a name="ShouldTagVolumesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagVolumesInput"></a>

```go
func ShouldTagVolumesInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldTagAmis`<sup>Required</sup> <a name="ShouldTagAmis" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagAmis"></a>

```go
func ShouldTagAmis() interface{}
```

- *Type:* interface{}

---

##### `ShouldTagEnis`<sup>Required</sup> <a name="ShouldTagEnis" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagEnis"></a>

```go
func ShouldTagEnis() interface{}
```

- *Type:* interface{}

---

##### `ShouldTagSnapshots`<sup>Required</sup> <a name="ShouldTagSnapshots" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagSnapshots"></a>

```go
func ShouldTagSnapshots() interface{}
```

- *Type:* interface{}

---

##### `ShouldTagVolumes`<sup>Required</sup> <a name="ShouldTagVolumes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagVolumes"></a>

```go
func ShouldTagVolumes() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsRevertToSpotOutputReference <a name="ManagedInstanceAwsRevertToSpotOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsRevertToSpotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedInstanceAwsRevertToSpotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.performAtInput">PerformAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.performAt">PerformAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PerformAtInput`<sup>Optional</sup> <a name="PerformAtInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.performAtInput"></a>

```go
func PerformAtInput() *string
```

- *Type:* *string

---

##### `PerformAt`<sup>Required</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.performAt"></a>

```go
func PerformAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedInstanceAwsRevertToSpot
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a>

---


### ManagedInstanceAwsScheduledTaskList <a name="ManagedInstanceAwsScheduledTaskList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsScheduledTaskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedInstanceAwsScheduledTaskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.get"></a>

```go
func Get(index *f64) ManagedInstanceAwsScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsScheduledTaskOutputReference <a name="ManagedInstanceAwsScheduledTaskOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsScheduledTaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedInstanceAwsScheduledTaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetCronExpression"></a>

```go
func ResetCronExpression()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetFrequency"></a>

```go
func ResetFrequency()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.taskType">TaskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.cronExpressionInput"></a>

```go
func CronExpressionInput() *string
```

- *Type:* *string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.taskTypeInput"></a>

```go
func TaskTypeInput() *string
```

- *Type:* *string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.taskType"></a>

```go
func TaskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsTagsList <a name="ManagedInstanceAwsTagsList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedInstanceAwsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.get"></a>

```go
func Get(index *f64) ManagedInstanceAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedInstanceAwsTagsOutputReference <a name="ManagedInstanceAwsTagsOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/managedinstanceaws"

managedinstanceaws.NewManagedInstanceAwsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedInstanceAwsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



